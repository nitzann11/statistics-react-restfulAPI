from django.urls import path
from .views.auth import RegisterView, LoginView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views.vacation_stats import VacationsStatsView
from .views.total_users import UserStatsView
from .views.total_likes import TotalLikesView
from .views.likes_distribution import LikesDistributionView


urlpatterns = [
    # Authentication URLs
    path('auth/register', RegisterView.as_view(), name='auth-register'),
    path('auth/login', LoginView.as_view(), name='auth-login'),
    path('auth/logout', LogoutView.as_view(), name='auth-logout'),
    path('auth/token', TokenObtainPairView.as_view(), name='auth-token'),
    path('auth/token/refresh', TokenRefreshView.as_view(), name='auth-token-refresh'),

    # Vacation stats URLs
    path('stats/vacations', VacationsStatsView.as_view(), name='stats-vacations'),
    path('stats/users', UserStatsView.as_view(), name='stats-users'),
    path('stats/total-likes', TotalLikesView.as_view(), name='stats-total-likes'),
    path('stats/likes-distribution', LikesDistributionView.as_view(), name='stats-likes-distribution'),


]
