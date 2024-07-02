from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
# Create your views here.
from .models import User
from .serializer import UserSerializer
from rest_framework import generics

class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


def helloworld(HttpRequest):
    return HttpResponse("Hello World!")