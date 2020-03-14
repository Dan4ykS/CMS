from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
# Можно было вынести в отдельный файл, но изменений по итогу не так много, так что не стал (хэши)
import hashlib


class GetUsers(APIView):

    def get(self, request):
        model = Users.objects.all()
        serializer = UsersSerializer(model, many=True)
        return Response(serializer.data)


class CreateUser(APIView):

    def post(self, request):
        serializer = UsersSerializer(data=request.data)        
        if serializer.is_valid(): 
            # Уникальный идентификатор пользователя. Хранится на сервере.
            eIdentifier = str(serializer.validated_data.get('__all__'))
            eIdentifier += 'some salt'
            eIdentifier = hashlib.sha1(str.encode(eIdentifier))
            eIdentifier = eIdentifier.hexdigest()
            # Хэширование пароля
            password = serializer.validated_data.get('password')
            h_password = hashlib.sha1(str.encode(password))
            h_password = h_password.hexdigest()
            # Сохранение хэш. пароля и идентификатора
            serializer.save(eIdentifier = eIdentifier)
            serializer.save(password = h_password)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


# Авторизация
class AuthUser(APIView):

    def post(self, request):
        userName = request.data.get('userName')
        password = request.data.get('password')
        # Хэширование пароля
        h_password = hashlib.sha1(str.encode(password))
        h_password = h_password.hexdigest()     
        try:
            user = Users.objects.get(userName=userName, password=h_password)
        except Users.DoesNotExist:
    # сервер принял запрос, но отказывается что-то делать
            return Response(status=status.HTTP_403_FORBIDDEN)
        else:
    # все нормально
            return Response(status=status.HTTP_200_OK)


# Пока не используется, но лучше написать заранее
class StayAuth(APIView):
    def post(self, request):
    # В теории это значение должно хранится на сервере и в куки одновременно.
    # После обновления страницы каждый раз отправлять запрос на сервер, чтобы проверить
        eIdentifier = request.data.get('eIdentifier')     
        try:
            user = Users.objects.get(eIdentifier=eIdentifier)
        except Users.DoesNotExist:
    # сервер принял запрос, но отказывается что-то делать
            return Response(status=status.HTTP_403_FORBIDDEN)
        else:
    # все нормально
            return Response(status=status.HTTP_200_OK)



class GetAllCommodities(APIView):

    def get(self, request):
        model = Commodity.objects.all()
        serializer = CommoditySerializer(model, many=True)
        return Response(serializer.data)


class AddCommodity(APIView):

    def post(self, request):
        serializer = CommoditySerializer(data=request.data)        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class GetAvailableCommoditiesInStore(APIView):

    def get(self, request):
        model = AvailableCommoditiesInStore.objects.all()
        serializer = AvailableCommoditiesInStoreSerializer(model, many=True)
        return Response(serializer.data)


class AddAvailableCommoditiesInStore(APIView):

    def post(self, request):
        serializer = AvailableCommoditiesInStoreSerializer(data=request.data)        
        if serializer.is_valid():
            # Не знаю надо ли приводить к int-у, но зато потом точно не навернется. 
            if int(request.data.get('countOfAvailable')) < 0:
                return Response(serializer.errors,status=status.HTTP_403_FORBIDDEN)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class GetUserBascets(APIView):

    def post(self, request):
        userName = request.data.get('userName')  
        model = UserBascet.objects.filter(userName=userName)
        description = Commodity.objects.get()
        serializer = UserBascetSerializer(model, many=True)
        return Response(serializer.data)


# Придумать название класса получше. Но потом
class AddCommodityInBascet(APIView):

    def post(self, request):
        serializer = UserBascetSerializer(data=request.data)
        # Проверка на правильность полученных данных        
        if serializer.is_valid():            
            try:
                # Попытка получить товар в корзине. Если его нет, то добавляет.
                # Если есть, то увеличивает количество на один. 
                commodity = request.data.get('commodity')
                userName = request.data.get('userName')
                commodity = Commodity.objects.get(commodity=commodity)                
                user = User.objects.get(userName=userName)
                # Увеличить общую цену корзины
                user.buscetPrice += commodity.commodityPrice
                user.save()
                bascet = UserBascet.objects.get(commodity=commodity, userName=userName)
            except UserBascet.DoesNotExist:    
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                available = AvailableCommoditiesInStore.objects.get(commodity=commodity)
                # Если на складе недостаточно товаров, то вернуть HTTP_403                
                if available.countOfAvailable < 1:
                    return Response(status=status.HTTP_403_FORBIDDEN)
                available.countOfAvailable -= 1
                available.save()
                commodity = UserBascet.objects.get(commodity=commodity, userName=userName)
                # Добавляет +1 к количеству товаров в корзине
                commodity.countOfCommodity += 1
                commodity.save()
                # Всё хорошо, вернуть HTTP_200
                return Response(status=status.HTTP_200_OK)
    # данные неправильные, возврат HTTP_400           
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class ReduceCommodityInBascet(APIView):

    def post(self, request):
        serializer = UserBascetSerializer(data=request.data)
        # Проверка на правильность полученных данных        
        if serializer.is_valid():            
            try:
                commodity = request.data.get('commodity')
                userName = request.data.get('userName')
                bascet = UserBascet.objects.get(commodity=commodity, userName=userName)
                commodity = Commodity.objects.get(commodity=commodity)                
                user = User.objects.get(userName=userName)
                # Если всё навернется, то 400 вернуть, потому что не должно быть меньше нуля (не считая тестов)
                # Но после того, как всё будет протестировано надо пересоздать БД !!!ВАЖНО!!!
                if user.buscetPrice - commodity.commodityPrice <= 0:
                    return Response(status=status.HTTP_400_BAD_REQUEST)
                # Общая цена в корзине уменьшается
                user.buscetPrice -= commodity.commodityPrice
                user.save()               
            except UserBascet.DoesNotExist:
                # Если товара нет в корзине, то 400    
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                available = AvailableCommoditiesInStore.objects.get(commodity=commodity)
                bascet.countOfCommodity -= 1
                available.countOfAvailable += 1
                available.save()                
                commodity.save()
                # Если в корзине товаров меньше одного, то удалить поле.                
                if bascet.countOfCommodity < 1:
                    bascet.delete()
                    return Response(status=status.HTTP_202_ACCEPTED)
                # Всё хорошо, вернуть HTTP_200
                return Response(status=status.HTTP_200_OK)
    # данные неправильные, возврат HTTP_400           
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
