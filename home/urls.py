from django.urls import path
from . import views


urlpatterns = [
	path('', views.base),
	path('homepage/', views.homepage, name='homepage'),
	path('about/', views.about, name='about'),
	path('services/', views.services, name='services'),
	path('approach/', views.approach, name='approach'),
	path('team/', views.team, name='team'),
	path('contactUs/', views.contactUs, name='contactUs'),
	path('news/', views.news, name='news'),
]