from django.db import models
from backend.models import *
from django.contrib.auth.models import User
import string
import random

# Create your models here.


def generate_code():
    length=15
    base = string.ascii_lowercase + string.ascii_uppercase + string.digits
    while True:
        code = ''.join(random.choices(base, k=length))
        break
    return code

class Event(models.Model):
    title = models.CharField(max_length=100)
    public = models.BooleanField(default=True)
    desc = models.TextField(max_length=1000)
    code = models.CharField(max_length=20, default=generate_code, editable=False)
    link = models.CharField(max_length=300)
    tags = models.CharField(max_length=500)
    img = models.ImageField(upload_to='events/')
    live_date = models.DateField()
    importance = models.CharField(max_length=20,default='Kind Of', choices=[
            ('Very Important', 'Very Important'),
            ('Kind Of Important', 'Kind Of Important'),
            ('Not Much Important', 'Not Much Important')
        ],
    )

class UserEventMap(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.DO_NOTHING)
    event = models.ForeignKey(Event, on_delete=models.DO_NOTHING)
    date = models.DateField(auto_now_add=True)
