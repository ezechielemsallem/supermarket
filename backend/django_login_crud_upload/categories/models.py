


from django.db import models


# create the categories model
class Categories(models.Model):
    
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=250, null=False, blank=False)
    amount = models.IntegerField(null=True, blank=True, default=0)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')

   
    def __str__(self):
        return self.name
