


from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name='userprofile_set')
    
    address = models.CharField(max_length=255)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')    
    def __str__(self):
        return f'Profile for user {self.user.username}'
