"""db_with_api_v1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from UserList.api import GetUsers, CreateUser, AuthUser, GetAllCommodities, AddCommodity, GetAvailableCommoditiesInStore
from UserList.api import AddAvailableCommoditiesInStore, GetUserBascets, AddCommodityInBascet, ReduceCommodityInBascet

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/get_user_list/$', GetUsers.as_view(), name='user_list'), # список всех пользователей вывести
    url(r'^api/create_new_user/$', CreateUser.as_view(), name='user_list'), # создать пользователя 
    url(r'^api/auth_user/$', AuthUser.as_view(), name='user_list'), # проверка авторизации
    url(r'^api/get_commodities_list/$', GetAllCommodities.as_view(), name='user_list'), # список всех товаров
    # если необходимо, можно создать поиск нужного товара    
    url(r'^api/add_commodity/$', AddCommodity.as_view(), name='user_list'), # добавить товар
    url(r'^api/get_list_of_av_comms/$', GetAvailableCommoditiesInStore.as_view(), name='user_list'), #список с id товара и количеством на складе    
    url(r'^api/add_av_comms/$', AddAvailableCommoditiesInStore.as_view(), name='user_list'), #добавить товар и его кол-во на склад (изменять имеющийся пока нельзя)
    url(r'^api/get_user_bascets/$', GetUserBascets.as_view(), name='user_list'), # поиск корзины пользователя по логину
    url(r'^api/add_commodity_in_bascet/$', AddCommodityInBascet.as_view(), name='user_list'), # добавление товара в корзину (нужны логин и id товара)
    url(r'^api/reduce_commodity_in_bascet/$', ReduceCommodityInBascet.as_view(), name='user_list') # убрать один товар из корзины
    # если два одинаковых товара, то останется только один
    # если был один товар, то он удалится вообще.
    
]
