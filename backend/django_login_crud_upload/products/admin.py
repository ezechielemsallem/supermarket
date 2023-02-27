from django.contrib import admin
from .models import Products

# connect between the table to the admin
admin.site.register(Products)

