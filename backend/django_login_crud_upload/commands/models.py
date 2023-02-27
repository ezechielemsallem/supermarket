from django.db import models
from django.contrib.auth.models import User
from products.models import Products





class Commands_list(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    address = models.CharField(max_length=250, null=False, blank=False)
    price = models.IntegerField( null=False, blank=False, default=0)

 


class Commands_details(models.Model):
    id = models.BigAutoField(primary_key=True)
    command = models.ForeignKey(Commands_list,on_delete=models.SET_NULL,null=True)
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    product = models.ForeignKey(Products,on_delete=models.SET_NULL,null=True)
    amount = models.IntegerField(null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)

   
    

