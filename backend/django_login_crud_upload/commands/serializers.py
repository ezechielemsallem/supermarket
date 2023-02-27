from rest_framework import serializers
from .models import  *

#command_details model serializers
class Commands_detailsSerializer(serializers.ModelSerializer):
    # to have the name of the product in the detail
    product_name = serializers.CharField(source='product.nameProduct', read_only=True) 
    # to have the price of the product in the detail
    product_price = serializers.CharField(source='product.price', read_only=True)

    class Meta:
        model = Commands_details
        fields = ("id", "user", "command", "product","product_name", "amount", "price", "product_price")
        

    def create(self, validated_data):
        user = self.context['user']
        print(user)
        return Commands_details.objects.create(**validated_data, user=user)

#command_list model serializers
class Commands_listSerializer(serializers.ModelSerializer):
    class Meta:
        model = Commands_list
        fields = ("id", "user", "address", "price")

    def create(self, validated_data):
        user = self.context['user']
        print(user)
        return Commands_list.objects.create(**validated_data, user=user)
