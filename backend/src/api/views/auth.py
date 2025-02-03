from rest_framework.views import APIView  # Base class for defining API views
from rest_framework.response import Response  # Response class to send HTTP responses
from rest_framework.exceptions import AuthenticationFailed  # Exception for failed authentication
from rest_framework import status  # Standard HTTP status codes
from ..serializers import UserSerializer  # Import serializer for user-related data
from ..models import UserModel  # Import UserModel to query user data
from rest_framework_simplejwt.tokens import RefreshToken  # JWT token generation
from rest_framework.permissions import AllowAny  # Permission class to allow any user access

# Register API View for user registration
class RegisterView(APIView):
    """
    Handles user registration.

    POST request to create a new user. The request data should contain:
    - email: The user's email.
    - password: The user's password (will be hashed).
    - first_name: User's first name.
    - last_name: User's last name.
    - role_id: User's role, 1 for admin, 2 for regular user.
    """
    permission_classes = [AllowAny]  # Allow any user to access the registration API

    def post(self, request):
        # Initialize the serializer with the request data
        serializer = UserSerializer(data=request.data)

        # Validate the data
        serializer.is_valid(raise_exception=True)

        # Save the user instance after validation
        serializer.save()

        # Return the serialized user data with 201 status (Created)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


# Login API View for user authentication
class LoginView(APIView):
    """
    Handles user login and JWT token generation.

    POST request to authenticate a user. The request data should contain:
    - email: The user's email for login.
    - password: The user's password for authentication.
    
    On successful login, the response includes:
    - refresh: Refresh token for obtaining new access tokens.
    - access: Access token for authenticated user.
    - user: User details (id, email, first name, last name, role).
    """
    permission_classes = [AllowAny]  # Allow any user to access the login API

    def post(self, request):
        # Extract email and password from the request data
        email = request.data['email']
        password = request.data['password']

        # Attempt to retrieve the user from the database
        user = UserModel.objects.filter(email=email).first()

        # If user is not found, raise authentication error
        if user is None:
            raise AuthenticationFailed("User not found")

        # If the password is incorrect, raise authentication error
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password")

        # Create a refresh token and access token for the authenticated user
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token

        # Add custom user data to the access token payload
        access_token['first_name'] = user.first_name
        access_token['last_name'] = user.last_name
        access_token['email'] = user.email
        access_token['role_id'] = user.role_id

        # Return the generated tokens and user details
        return Response({
            'refresh': str(refresh),  # Return the refresh token
            'access': str(access_token),  # Return the access token
            'user': {  # Return user details
                'id': user.user_id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'role_id': user.role_id,
            }
        }, status=status.HTTP_200_OK)


# Logout API View for user logout
class LogoutView(APIView):
    """
    Handles user logout.

    POST request to log out the user. This can involve removing the refresh token 
    or notifying the frontend to clear the session.
    """
    def post(self, request):
        # Here, we can handle actions to log out the user (e.g., invalidate tokens, clear session)
        # As JWT is stateless, there's no server-side session to clear, so we simply return a message.

        return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
