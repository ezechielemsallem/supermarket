
from django.urls import path
from . import views


urlpatterns = [
    
    path('',views.APIViews.as_view()),
    path('<int:id>',views.APIViews.as_view()),
   
]
