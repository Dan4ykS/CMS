# Generated by Django 3.0.3 on 2020-02-18 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('nickname', models.CharField(max_length=64, unique=True)),
                ('password', models.CharField(max_length=32)),
            ],
        ),
    ]
