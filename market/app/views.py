from django.shortcuts import render
from .models import *

def index(request):
    # products = Product.objects.all()
    context = {} #{'products': products}
    return render(request, 'app/welcome.html', context)

def product(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'app/product.html', context)