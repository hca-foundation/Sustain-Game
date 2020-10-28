from django.db import models
from .event import Event
from .quiz_bank import QuizBank


class EventQuiz(models.Model):
    """Event Quiz Model

    Description: Stores a single relationship between an Event and a Quiz from the quiz bank

    Fields
    - event = `ForeignKey(Event, on_delete=models.CASCADE)`
    - quiz = `ForeignKey(QuizBank, on_delete=models.CASCADE)`
    """
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    quiz = models.ForeignKey(QuizBank, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Event Quizzes"
