# Generated by Django 4.0.6 on 2023-02-23 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profil', '0007_alter_userprofile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='image',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
    ]
