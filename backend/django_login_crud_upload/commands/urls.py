from django.urls import path
from . import views

urlpatterns = [
    
    path('commands_details',views.CommandsDetailsViews.as_view()),
    path('commands_details/<int:id>',views.CommandsDetailsViews.as_view()),
    path('commands_list',views.CommandsList.as_view()),
    path('commands_list/<int:id>',views.CommandsList.as_view()),

]