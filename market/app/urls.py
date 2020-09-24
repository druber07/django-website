from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = "Maket"),
    path('product/', views.product, name = "Products"),
]
