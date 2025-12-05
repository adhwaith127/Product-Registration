from rest_framework import serializers
from .models import Serialdata,PalmtecUpiDetails
import re


class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serialdata
        fields = '__all__'

    def validate_serialnumber(self,value):
        
        pattern = "^[0-9]{4}[0-9]{2}(AMP|API)[0-9]{6}B$"

        if not re.fullmatch(pattern=pattern, string=value):
            serializers.ValidationError("Serial number not following pattern")