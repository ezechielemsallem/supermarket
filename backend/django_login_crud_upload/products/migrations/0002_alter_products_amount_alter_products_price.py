# Generated by Django 4.0.6 on 2023-01-28 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='amount',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='products',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
