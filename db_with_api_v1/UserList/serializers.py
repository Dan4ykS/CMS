from rest_framework import serializers
from UserList.models import Users, Commodity, Bascet, AvailableCommodities

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


class BascetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bascet
        fields = '__all__'


class AvailableCommodities(serializers.ModelSerializer):

    class Meta:
        model = AvailableCommodities
        fields = '__all__'