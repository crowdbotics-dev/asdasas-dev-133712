from django.conf import settings
from django.db import models


class Hobby(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=100,
    )
    description = models.TextField()
