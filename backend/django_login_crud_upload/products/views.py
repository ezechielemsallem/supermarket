
from django.shortcuts import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework.decorators import api_view
from categories.models import Categories

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework import status
import json


# products function 
# to add delete and modify use the admin page 


class APIViews(APIView):
    parser_class=(MultiPartParser,FormParser)
    def get(self, request, id=-1):
        if id == -1: #to get all the products
            my_model = Products.objects.all()
            serializer = ProductsSerializer(my_model, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        else : #to get just one product
            my_model = Products.objects.filter(id=id).all()
            serializer = ProductsSerializer(my_model, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
    
    
    
 
  
        
       

