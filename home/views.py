from django.shortcuts import render

# Create your views here.
def base(request):
	return render(request, "home/base.html")

def homepage(request):
	return render(request, 'home/homepage.html')

def services(request):
	return render(request, 'home/services.html')

def approach(request):
	return render(request, 'home/approach.html')

def about(request):
	return render(request, 'home/about.html')

def team(request):
	return render(request, 'home/team.html')

def contactUs(request):
	return render(request, 'home/contact.html')

def news(request):
	return render(request, 'home/news.html')