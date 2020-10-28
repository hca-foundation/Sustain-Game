from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.EventQuiz)
admin.site.register(models.Event)
admin.site.register(models.QuestionBankAnswer)
admin.site.register(models.QuestionBank)
admin.site.register(models.QuizBank)
admin.site.register(models.QuizQuestion)
admin.site.register(models.QuizTaker)
