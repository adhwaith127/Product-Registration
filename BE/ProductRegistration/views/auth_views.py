from django.db import connection
from rest_framework import status
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..models import Serialdata, Palmteccustomerdetails
from ..serializers import DeviceSerializer,SerialNumberDetails,MappingSerializer
