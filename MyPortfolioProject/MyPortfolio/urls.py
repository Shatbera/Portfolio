from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('bear-time/', views.bear_time, name='bear-time'),
    path('merge-horizons/', views.merge_horizons, name='merge-horizons'),
]