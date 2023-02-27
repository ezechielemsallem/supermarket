


from rest_framework import serializers
from .models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile # Table
        fields='__all__' # ['title','content','image']

    

