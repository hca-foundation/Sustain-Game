# Generated by Django 2.2.5 on 2020-10-28 01:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangorestapp', '0006_quizquestion'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='deleted',
            field=models.DateTimeField(editable=False, null=True),
        ),
        migrations.AddField(
            model_name='quizbank',
            name='deleted',
            field=models.DateTimeField(editable=False, null=True),
        ),
    ]
