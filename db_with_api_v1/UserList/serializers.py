from rest_framework import serializers
from UserList.models import Users, Commodity, AvailableCommoditiesInStore, UserBascet

class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = '__all__'


class UserAuthSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('userName', 'password') 


class CommoditySerializer(serializers.ModelSerializer):

    class Meta:
        model = Commodity
        fields = '__all__'


class AvailableCommoditiesInStoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = AvailableCommoditiesInStore
        fields = '__all__'


class UserBascetSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserBascet
        fields = '__all__'


