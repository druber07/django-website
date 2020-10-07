from django.forms import ModelForm
from .models import *

class MessagesForm(ModelForm):
    class Meta:
        model = Messages
        fields = '__all__'