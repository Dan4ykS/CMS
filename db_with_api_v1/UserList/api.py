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
            password = serializer.validated_data.get('password')
            h_password = hashlib.sha1(str.encode(password))
            h_password = h_password.hexdigest()
            serializer.save(password = h_password)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class AuthUser(APIView):

    def post(self, request):
        userName = request.data.get('userName')
        password = request.data.get('password')
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
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class GetUserBascets(APIView):

    def get(self, request):
        model = UserBascet.objects.all()
        serializer = UserBascetSerializer(model, many=True)
        return Response(serializer.data)


class AddUserBascet(APIView):

    def post(self, request):
        serializer = UserBascetSerializer(data=request.data)        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        