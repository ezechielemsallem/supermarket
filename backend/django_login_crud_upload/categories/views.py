
from django.shortcuts import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import *
from .models import *
from rest_framework.decorators import api_view
from products.models import Products
from products.serializers import ProductsSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework import status



#categories crud 
#to modify or add categorie use the admin page 


class APIViews(APIView):
    parser_class=(MultiPartParser,FormParser)
    def get(self, request, id = -1):
        if id ==-1 :   #to see all categories
            my_model = Categories.objects.all()
            serializer = CategoriesSerializer(my_model, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        else : #to see all products of one categorie
            my_model = Products.objects.filter(categorieOfProduct = id)
            serializer = ProductsSerializer(my_model, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
            
    
    def delete(self, request, id):
        #to delete one categorie 
        my_model = Categories.objects.get(id=id)
        my_model.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


    
