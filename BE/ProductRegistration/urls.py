from django.urls import path
from .views import add_serial_number

urlpatterns = [
    path('add-serial-number/', add_serial_number),
]
