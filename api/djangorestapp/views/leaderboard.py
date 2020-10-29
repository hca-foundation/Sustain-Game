from rest_framework import serializers, status
from djangorestapp.models import QuizTaker, Event
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view


@api_view(('GET',))
def get_leaderboard(request):
    try:
        # get current event
        active_event = get_object_or_404(Event, active=True)
        # get quiz takers from that event
        top_scores = (QuizTaker.objects
                      .order_by('-score')
                      .values_list('score', flat=True)
                      .distinct())

        quiz_taker = QuizTaker.objects.order_by('-score')[:5]

        serializer = QuizTakerSerializer(quiz_taker, many=True)
        print(serializer.data)
        # get the top 5 quiz takers
        return Response(serializer.data)
    except Exception as error:
        return Response({"detail": f"{error}"}, status=status.HTTP_404_NOT_FOUND)


class QuizTakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizTaker
        fields = ["score", "initials"]
