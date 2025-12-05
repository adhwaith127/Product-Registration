from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Serialdata,PalmtecUpiDetails
from .serializers import DeviceSerializer


@api_view(['POST'])
def add_serial_number(request):
    try:
        serializer = DeviceSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Serializer added", "data": serializer.data}, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return Response({"Error":f"Error in received data,{str(e)}","status":status.HTTP_400_BAD_REQUEST})