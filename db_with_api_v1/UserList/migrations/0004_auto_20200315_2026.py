# Generated by Django 3.0.3 on 2020-03-15 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserList', '0003_commodity_commodityimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='eIdentifier',
            field=models.TextField(null=True),
        ),
    ]
