from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def bear_time(request):
    return render(request, 'bear-time.html')

def merge_horizons(request):
    return render(request, 'merge-horizons.html')
    
