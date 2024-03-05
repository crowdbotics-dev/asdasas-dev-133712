from django.contrib import admin
from .models import Hobby, TestManyToMany

admin.site.register(Hobby)
admin.site.register(TestManyToMany)

# Register your models here.
