from django.urls import path
from django import urls
from .views import UserDetails, UserList, helloworld
urlpatterns = [
    path('users/',UserList.as_view(),name='Users'),
    path('users/<int:pk>',UserDetails.as_view(), name='User'),
    path('hello',helloworld,name='hello')
]