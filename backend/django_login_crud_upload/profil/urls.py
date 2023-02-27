
from django.urls import path
from . import views
from . import views

urlpatterns = [
    
    path('',views.APIViews.as_view()),
    

]


