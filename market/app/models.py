from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=20, null = True)
    desc = models.CharField(max_length=200, null = True)
    cost = models.FloatField()
    date = models.DateField()

    def __str__(self):
        return self.name
        
class Messages(models.Model):
    sender = models.CharField(max_length=20, null = True)
    message = models.CharField(max_length=200, null = True)

    def __str__(self):
        return self.sender