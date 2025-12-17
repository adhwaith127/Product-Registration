from django.urls import path
import ProductRegistration.views as views
from .views import auth_views,device_views,mapping_views


urlpatterns = [
    path('get_serial_numbers/', device_views.get_serial_numbers, name="get_serial_numbers"),
    path('add_serial_number/', device_views.add_serial_number, name="add_serial_number"),
    path('approve_serial_number/', device_views.approve_serial_number, name="approve_serial_number"),
    path('allocate_serial_number/', device_views.allocate_serial_number, name="allocate_serial_number"),
    path('getSerialNumber/', device_views.get_unallocated_sl_no, name="get_unallocated_sl_no"),
    path('get_device_details/', device_views.get_device_details, name="get_device_details"),
    path('get_customer_mappings/', mapping_views.get_customer_mappings, name="get_customer_mappings"),
    path('create_customer_mapping/', mapping_views.create_customer_mapping, name="create_customer_mapping"),
    path('update_customer_mapping/', mapping_views.update_customer_mapping, name="update_customer_mapping"),
]