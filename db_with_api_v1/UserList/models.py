from django.db import models

# Create your models here.
class Users(models.Model):
    user_id = models.IntegerField(null=False, primary_key=True)
    nickname = models.CharField(max_length=64, unique=True, null=False)
    password = models.CharField(max_length=32, null=False)


 