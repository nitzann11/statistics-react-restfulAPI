from rest_framework.views import APIView  # Import base class for API views
from rest_framework.response import Response  # Response class to send HTTP responses
from ..models import UserModel  # Import the UserModel for querying the user data

class UserStatsView(APIView):
    """
    API view that retrieves the total number of users in the system.

    The API counts the total number of users from the UserModel and returns the result.

    GET request:
    - Returns the total count of registered users in the system.
    """

    def get(self, request):
        """
        GET request handler for retrieving the total number of users.

        - Counts all records in the UserModel to determine the total number of users.

        Returns:
        - A JSON response with the total number of users.
        """
        
        # Count the total number of users from the UserModel
        total_users = UserModel.objects.count()

        # Return the total users count as a JSON response
        return Response({
            "total_users": total_users  # Return the count of users
        })
