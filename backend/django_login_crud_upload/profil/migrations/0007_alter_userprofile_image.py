# Generated by Django 4.0.6 on 2023-02-23 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profil', '0006_alter_userprofile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to='Posted_Images'),
        ),
    ]