from django.db import models

class QuizBank(models.Model):
    """Quiz Bank Model
    
    Description: Stores a single quiz for the quiz bank

    Fields
    - name = `models.CharField(max_length=255)`
    - timer = `models.IntegerField` in minutes
    """
    name = models.CharField(max_length=255)
    timer = models.IntegerField()

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "quiz banks"

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name
