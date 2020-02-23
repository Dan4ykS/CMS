from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *

class GetUsers(APIView):

    def get(self, request):
        model = Users.objects.all()
        serializer = UsersSerializer(model, many=True)
        return Response(serializer.data)


class CreateUser(APIView):

    def post(self, request):
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class AuthUser(APIView):

    def post(self, request):
        userName = request.data.get('userName')
        password = request.data.get('password')       
        try:
            user = Users.objects.get(userName=userName, password=password)
        except Users.DoesNotExist:
    # сервер принял запрос, но отказывается что-то делать (вроде так, на всякий случай, если надо, то гугл)
            return Response(status=status.HTTP_403_FORBIDDEN)
        else:
    # все нормально
            return Response(status=status.HTTP_200_OK)
        




    
