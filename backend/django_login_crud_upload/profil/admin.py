from django.contrib import admin
from .models import UserProfile

# connect between the table to the admin
admin.site.register(UserProfile)

