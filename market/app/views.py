from django.shortcuts import render
from .models import *
import re 
import time

regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
def check(email):  
    if(re.search(regex,email)):
        return True
    else:  
        return False

def index(request):
    products = Product.objects.all()[:6]
    context = {'products': products}

    if request.method == "POST":
        person_name = request.POST['person_name']
        person_email = request.POST['person_email']
        message = request.POST['message']

        if(person_name != "" and check(person_email) and message != ""):
            Messages.objects.create(sender= person_name, email= person_email, message= message)
            print(person_name)
            time.sleep(3)

        return render(request, 'app/welcome.html', context)

    else:
        return render(request, 'app/welcome.html', context)

def product(request):
    products = Product.objects.all()    
    context = {'products': products}
    return render(request, 'app/product.html', context)