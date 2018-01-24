from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect

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

def news(request):
	return render(request, 'home/news.html')

def contactUs(request):
	if request.method == 'GET':
		form = ContactForm()
	else:
		form = ContactForm(request.POST)
		if form.is_valid():
			name = form.cleaned_data['name']
			contact_email = form.cleaned_data['contact_email']
			message = form.cleaned_data['message']
			try:
				send_mail(name, message, contact_email, ['admin@3vrm.com'])
			except BadHeaderError:
				return HttpResponse('Invalid header found.')

			return redirect('success')
	return render(request, "home/contact.html", {'form' : form})

def successView(request):
    return HttpResponse('Success! Thank you for your message.')