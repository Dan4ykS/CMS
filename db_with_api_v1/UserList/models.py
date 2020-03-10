from django.db import models

# Create your models here.
class Users(models.Model):
    userName = models.CharField(max_length=32, null=False, primary_key=True)
    email = models.CharField(max_length=64, unique=True, null=False)
    password = models.CharField(max_length=64, null=False)


class Commodity(models.Model):
    commodityID = models.IntegerField(primary_key=True)
    commodityName = models.TextField(null=False)
    commodityPrice = models.IntegerField(null=False)
    commodityDescription = models.TextField(null=True)


class AvailableCommoditiesInStore(models.Model):
    commodity = models.ForeignKey(Commodity, on_delete=models.CASCADE)
    countOfAvailable = models.IntegerField(null=False)


class UserBascet(models.Model):
    userName = models.ForeignKey(Users, on_delete=models.CASCADE)
    commodity = models.ForeignKey(Commodity, on_delete=models.CASCADE)
 