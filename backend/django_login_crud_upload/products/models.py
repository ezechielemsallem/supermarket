


from django.db import models

from categories.models import Categories

# create the product model
class Products(models.Model):
    
    id = models.BigAutoField(primary_key=True)
    categorieOfProduct = models.ForeignKey(Categories,on_delete=models.SET_NULL,null=True)
    nameProduct = models.CharField(max_length=16, null=True, blank=False)
    price = models.IntegerField(null=False,  blank=False,  default=0)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')
    amount = models.IntegerField(null=False,  blank=False, default=0)

   
    def __str__(self):
        return self.nameProduct
    

    

