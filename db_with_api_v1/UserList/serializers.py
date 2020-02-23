from rest_framework import serializers
from UserList.models import Users

class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = '__all__'


class UserAuthSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('userName', 'password') 

