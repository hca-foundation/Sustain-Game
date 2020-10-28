# Generated by Django 2.2.5 on 2020-10-28 00:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('djangorestapp', '0003_questionbank'),
    ]

    operations = [
        migrations.CreateModel(
            name='QuestionBankAnswer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.CharField(max_length=255)),
                ('is_correct', models.BooleanField(default=False)),
                ('question_bank', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='djangorestapp.QuestionBank')),
            ],
            options={
                'verbose_name_plural': 'question bank answers',
                'ordering': ['answer'],
            },
        ),
    ]