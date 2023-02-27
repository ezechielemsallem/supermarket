
import json
from django.shortcuts import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import *



from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework import status




# profil function 


@permission_classes([IsAuthenticated])
class APIViews(APIView):
    
    def get(self, request): # get the user's profil
        user_profile = request.user.userprofile_set
        serializer = UserProfileSerializer(user_profile)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    # def put(self, request):
    #     """
    #     Handle PUT requests to update an existing Task object
    #     """
    #     user_profile = request.user.userprofile_set
    #     serializer = UserProfileSerializer(user_profile, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    

  
        
       

