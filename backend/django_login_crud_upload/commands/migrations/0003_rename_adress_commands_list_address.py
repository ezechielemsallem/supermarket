# Generated by Django 4.0.6 on 2023-02-15 21:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('commands', '0002_alter_commands_list_adress'),
    ]

    operations = [
        migrations.RenameField(
            model_name='commands_list',
            old_name='adress',
            new_name='address',
        ),
    ]