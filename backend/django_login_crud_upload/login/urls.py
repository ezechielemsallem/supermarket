
from django.urls import path
from . import views
from . import views

urlpatterns = [
    
    path('', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.register),

]


