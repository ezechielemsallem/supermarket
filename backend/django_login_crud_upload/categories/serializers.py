

from rest_framework import serializers
from .models import  *

#Categories model serializers
class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ("id", "amount", "image", "name")

    




