from django.shortcuts import render
from .models import *

def index(request):
    products = Product.objects.all()
    # if(Product.objects.all().count() < 6):
    #     for  x in range(6 - Product.objects.all().count() ):
    #         # products = Product.objects.create(name='None', desc='The product will added soon', cost='0', date='2000-1-1')
    #         # products.save()
    #     context = {'products': products}
    #     return render(request, 'app/welcome.html', context)

    # elif(products.count > 6):
    #     products = products
    #     context = {'products': products}
    #     return render(request, 'app/welcome.html', context)

    context = {'products': products}
    return render(request, 'app/welcome.html', context)

def product(request):
    products = Product.objects.all()
    context = {'products': products}
    return render(request, 'app/product.html', context)