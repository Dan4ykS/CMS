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
    # commodityImage = models.ImageField()
    # Потом надо научиться работать с изображениями

# Вспомогательная таблица с количеством товара на складе
# Есть версия, что я чего-то очевидного не улавливаю, 
# поэтому если будут идеи по улучшению (удалению этой таблички), то буду рад 
class AvailableCommodities(models.Model):
    countCommoditiesID = models.ForeignKey(Commodity, on_delete=models.CASCADE)
    countInStore = models.IntegerField(null=False)
    


class Bascet(models.Model):
    bascetID = models.ForeignKey(Users, on_delete=models.CASCADE)
    bascetCommodityID = models.ForeignKey(Commodity, on_delete=models.CASCADE)
    bascetAvailableCommodities = models.ForeignKey(AvailableCommodities, on_delete=models.CASCADE)
    bascetPrice = models.IntegerField(null=False)

 