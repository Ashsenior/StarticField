from django.db import models

# Create your models here.
class Userdetails(models.Model):
    Firstname = models.CharField(max_length=255)
    Lastname = models.CharField(max_length=255)
    Email = models.EmailField(primary_key=True)
    Password = models.CharField(max_length=255)
    Createdon = models.DateField(auto_now_add=True)
    Desc = models.TextField()
    Intrests = models.CharField(max_length=255)
    Timeline = models.TextField()

    class Meta:
        verbose_name = 'USER_DETAILS'

class Events(models.Model):
    Picture = models.ImageField()
    Eventname = models.CharField(max_length=255)
    Hostname = models.CharField(max_length=255)
    Date = models.DateField()

    class Meta:
        verbose_name = 'Events_Data'

class Programs(models.Model):
    Picture = models.ImageField()
    Eventname = models.CharField(max_length=255)
    Hostname = models.CharField(max_length=255)
    Date = models.DateField()

    class Meta:
        verbose_name = 'Programs_Register'

