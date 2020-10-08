from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = "Company"),
    path('product/', views.product, name = "Products"),
]
