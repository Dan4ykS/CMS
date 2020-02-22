from django.db import models

# Create your models here.
class Users(models.Model):
    userName = models.CharField(max_length=32, null=False, primary_key=True)
    email = models.CharField(max_length=64, unique=True, null=False)
    password = models.CharField(max_length=32, null=False)


 