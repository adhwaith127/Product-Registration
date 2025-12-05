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
                return Response({"message": "success", "data": serializer.data})
        return Response({"message": "error", "errors": serializer.errors}, status=400)

    except Exception as e:
        return Response({"Error":f"Error in received data,{str(e)}","status":status.HTTP_400_BAD_REQUEST})