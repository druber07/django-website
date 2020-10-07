from django.shortcuts import render
from .models import *
from .forms import *
import re 
import time

def index(request):
    products = Product.objects.all()[:6]
    messages = Messages.objects.all()
    
    form = MessagesForm()
    if request.method == "POST":
        form = MessagesForm(request.POST or None)
        if form.is_valid():
            used = True
            for m in messages:
                if(form.cleaned_data["sender"] == m.sender and form.cleaned_data["email"] == m.email and form.cleaned_data["message"] == m.message):
                    if used:
                        used = False
            if used:    
                form.save()

            form = MessagesForm()
    context ={'products': products}
    return render(request, 'app/welcome.html', context)


def product(request):
    products = Product.objects.all()    
    context = {'products': products}
    return render(request, 'app/product.html', context)