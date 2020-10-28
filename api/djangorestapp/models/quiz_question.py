from django.db import models
from .quiz_bank import QuizBank
from .question_bank import QuestionBank


class QuizQuestion(models.Model):
    """Quiz Question Model

    Description: Stores a single relationship between an Quiz
    from the quiz bank and a Question from the question bank

    Fields
    - quiz_bank = `ForeignKey(QuizBank, on_delete=models.CASCADE)`
    - question_bank = `ForeignKey(QuestionBank, on_delete=models.CASCADE)`
    """
    quiz_bank = models.ForeignKey(QuizBank, on_delete=models.CASCADE)
    question_bank = models.ForeignKey(QuestionBank, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "quizzes questions"
