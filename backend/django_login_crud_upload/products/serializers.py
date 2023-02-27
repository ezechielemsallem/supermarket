

from rest_framework import serializers
from .models import  *

#products model serializers
class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        
        model = Products
        fields = ("id", "categorieOfProduct", "nameProduct" , "price", "image", "amount")

    



