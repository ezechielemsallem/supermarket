
from rest_framework.response import Response


from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from profil.models import UserProfile
from profil.serializers import UserProfileSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status

# to login and get token 
# with the token we send the email, id, username, email and if is a superuser
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        token['username'] = user.username
        token['id']= user.id
        token['is_superuser']= user.is_superuser
        token['address']= UserProfile.objects.filter(user=user.id).first().address
        token['email']= User.objects.filter(id=user.id).first().email
        return token
 
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

# register function 
@api_view(['POST'])
def register(request):
    #create the user 
    user = User.objects.create_user(
                username=request.data['username'],
                email=request.data['userEmail'],
                password=request.data['password']
            )
    user.is_active = True
    
    profil_info = {
        "user" : user.id,
        "address":request.data['address'],
    }

    info_to_login = {
        "username" : request.data['username'], 
        "password" :  request.data['password']
    }
   
    api_serializer=UserProfileSerializer(data=profil_info, context={'user':user.id})
    
    # create the user's profil
    if api_serializer.is_valid():
        api_serializer.save()

        return Response(info_to_login,status=status.HTTP_201_CREATED)
    else:
        print('error',api_serializer.errors)
        return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

       
