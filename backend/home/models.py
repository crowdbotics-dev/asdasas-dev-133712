from django.conf import settings
from django.db import models


class Hobby(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=100,
    )
    description = models.TextField()


class TestManyToMany(models.Model):
    "Generated Model"
    hobby = models.ManyToManyField(
        "home.Hobby",
        related_name="testmanytomany_hobby",
    )
    name = models.CharField(
        max_length=255,
    )
