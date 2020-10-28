from . import models
from django.contrib.admin import AdminSite
from django.template.response import TemplateResponse
from django.http import HttpResponse
from django.urls import path


class MyAdminSite(AdminSite):

    def get_urls(self):
        urls = super().get_urls()
        urls += [
            path('my_view/', self.admin_view(self.my_view))
        ]
        return urls

    def my_view(self, request):
        print(request.user, "*********************")
        context = dict(
            self.each_context(request),
            title=('Twsdfsrsr'),
            app_path=None,
            username=request.user.get_username(),
        )
        return TemplateResponse(request, "sometemplate.html", context)


admin_site = MyAdminSite(name='myadmin')
admin_site.site_url = None
# Register your models here.

admin_site.register(models.EventQuiz)
admin_site.register(models.Event)
admin_site.register(models.QuestionBankAnswer)
admin_site.register(models.QuestionBank)
admin_site.register(models.QuizBank)
admin_site.register(models.QuizQuestion)
admin_site.register(models.QuizTaker)
