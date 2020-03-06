# Generated by Django 3.0.3 on 2020-03-01 11:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('UserList', '0003_auto_20200224_1916'),
    ]

    operations = [
        migrations.CreateModel(
            name='Commodity',
            fields=[
                ('commodityID', models.IntegerField(primary_key=True, serialize=False)),
                ('commodityName', models.TextField()),
                ('commodityCount', models.IntegerField()),
                ('commodityPrice', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Bascet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bascetPrice', models.IntegerField()),
                ('bascetCommodityID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserList.Commodity')),
                ('bascetID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='UserList.Users')),
            ],
        ),
    ]
