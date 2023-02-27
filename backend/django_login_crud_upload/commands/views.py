from django.shortcuts import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import *
from rest_framework.decorators import api_view

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework import status



# the crud to manage the commands 
# to modify or delete one command or one command detail use the admin page 

@permission_classes([IsAuthenticated])  #the user must to be login to do command
class CommandsDetailsViews(APIView):
    parser_class=(MultiPartParser,FormParser)
    def get(self, request, id=-1):
        if id ==-1 : #to see all the details of all commands
            my_model = Commands_details.objects.all()
            serializer = Commands_detailsSerializer(my_model, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        else : #to see all the product of one command 
            my_model = Commands_details.objects.filter(command = id).all() 
            serializer = Commands_detailsSerializer(my_model, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
    #  when the user do a new command he add a new command on the model 
    #  commands_list and add all the products on the model commands_details
    def post(self,request,*args,**kwargs):
        commands_list_serializer=Commands_listSerializer(data=request.data["commands_list"], context={'user':request.user})
        if commands_list_serializer.is_valid():
            commands_list_serializer.save()   #add a new command 
        else:
            print('error',commands_list_serializer.errors)
            return Response(commands_list_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
        for product in request.data["products"]: 
            item= {
                "command": commands_list_serializer.data["id"],
                "product":product['product']['id'],
                "amount": product["amount"],
                "price":product["price"]
            }

            commands_details_serializer=Commands_detailsSerializer(data=item, context={'user':request.user})
            if commands_details_serializer.is_valid():
                commands_details_serializer.save() #add the product on commands_details
            else:
                print('error',commands_details_serializer.errors)
                return Response(commands_details_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        return Response(commands_list_serializer.data,status=status.HTTP_201_CREATED)
    



@permission_classes([IsAuthenticated])
class CommandsList(APIView):
    parser_class=(MultiPartParser,FormParser)
    def get(self, request):  #to see just the list of the commands
        user= request.user
        if user.is_superuser:
            my_model = Commands_list.objects.all()   #to see all the commands of all users
            serializer = Commands_listSerializer(my_model, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        else :
            serializer = Commands_listSerializer(user.commands_list_set.all(), many=True) #just see the commands of the user 
            return Response(status=status.HTTP_200_OK, data=serializer.data)

    

    
