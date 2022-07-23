from django.shortcuts import render, redirect
from .credentials import *
from rest_framework import generics,status
from rest_framework.views import APIView
from requests import Request, post, PreparedRequest, get
from rest_framework.response import Response
from .utils import *
from .serializers import *
from .models import *
from django.utils import timezone
from datetime import timedelta