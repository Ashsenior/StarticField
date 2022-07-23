from django.db import models
from django.contrib.auth.models import User
import string
import random

# Create your models here.

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, null=True)
    xp = models.IntegerField(default=0, null=True)
    full_name = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    interest = models.CharField(max_length=200, null=True, default='startic-field,')
    social = models.CharField(max_length=300, null=True)


class Program(models.Model):
    title = models.CharField(max_length=100)
    public = models.BooleanField(default=True)
    desc = models.TextField(max_length=1000)
    tags = models.CharField(max_length=500)
    img = models.ImageField(upload_to='programs/')
    live_date = models.DateField()
    team_needed = models.BooleanField(default=False)


class UserProgramMap(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.DO_NOTHING)
    program = models.ForeignKey(Program, on_delete=models.DO_NOTHING)
    date = models.DateField(auto_now_add=True)

class Startup(models.Model):
    name = models.CharField(max_length=200, null=True)
    link = models.CharField(max_length=200, null=True)
    members = models.CharField(max_length=500, null=True)
    social1 = models.CharField(max_length=200, null=True)
    social2 = models.CharField(max_length=200, null=True)
    email = models.EmailField(null=True)
    supporters = models.IntegerField(null=True, default=0)