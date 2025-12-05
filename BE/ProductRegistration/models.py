from django.db import models


class Serialdata(models.Model):
    serialnumber = models.CharField(db_column='serialNumber',primary_key=True, max_length=18, blank=True, null=True)  # Field name made lowercase.
    isapproved = models.IntegerField(db_column='isApproved', blank=True, null=True)  # Field name made lowercase.
    isallocated = models.IntegerField(db_column='isAllocated', blank=True, null=True)  # Field name made lowercase.
    createdate = models.DateTimeField(db_column='createDate', blank=True, null=True)  # Field name made lowercase.
    modifieddate = models.DateTimeField(db_column='modifiedDate', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'serialdata'


class PalmtecUpiDetails(models.Model):
    upideviceserialnumber = models.CharField(db_column='upiDeviceSerialNumber', primary_key=True, max_length=24)  # Field name made lowercase.
    uniqueidentifier = models.CharField(db_column='uniqueIdentifier', max_length=24, blank=True, null=True)  # Field name made lowercase.
    customercode = models.BigIntegerField(db_column='customerCode')  # Field name made lowercase.
    customername = models.CharField(db_column='customerName', max_length=128, blank=True, null=True)  # Field name made lowercase.
    isapproved = models.IntegerField(db_column='isApproved', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.IntegerField(db_column='isDeleted', blank=True, null=True)  # Field name made lowercase.
    createdon = models.DateTimeField(db_column='createdOn', blank=True, null=True)  # Field name made lowercase.
    modifiedon = models.DateTimeField(db_column='modifiedOn', blank=True, null=True)  # Field name made lowercase.
    clicenseurl = models.CharField(db_column='cLicenseURL', max_length=255, blank=True, null=True)  # Field name made lowercase.
    versiondetails = models.CharField(db_column='versionDetails', max_length=12, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'palmtec_upi_details'