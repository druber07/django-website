from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=20, null = True)
    description = models.CharField(max_length=500, null = True)
    cost = models.FloatField()
    date = models.DateField()
    image = models.ImageField(null=True, blank = True)

    def __str__(self): 
         return self.name

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

class Messages(models.Model):
    sender = models.CharField(max_length=20, null = True)
    email = models.CharField(max_length=50, null = True)
    message = models.CharField(max_length=500, null = True)

    def __str__(self): 
         return self.sender