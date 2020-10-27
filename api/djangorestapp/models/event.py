from django.db import models


class Event(models.Model):
    """Event Model

    Fields
    - name = `models.CharField`
    - active =  `models.BooleanField`
    - date = `models.DateField(auto_now=False, auto_now_add=False)`
    """
    name = models.CharField(max_length=255)
    active = models.BooleanField(default=False)
    child_mode = models.BooleanField(default=False)
    date = models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        ordering = ["active"]
        verbose_name_plural = "events"

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name
