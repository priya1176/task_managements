from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, RegisterView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html')),

]
