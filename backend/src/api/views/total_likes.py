from rest_framework.views import APIView  # Import base class for API views
from rest_framework.response import Response  # Response class to send HTTP responses
from ..models import LikesModel  # Import the LikesModel for querying the like data

class TotalLikesView(APIView):
    """
    API view that retrieves the total number of likes across all vacation destinations.

    The API counts the total number of likes from the LikesModel and returns the result.

    GET request:
    - Returns the total count of likes from all users across all vacations.
    """

    def get(self, request):
        """
        GET request handler for retrieving the total number of likes.

        - Counts all records in the LikesModel to determine the total number of likes.

        Returns:
        - A JSON response with the total number of likes.
        """
        
        # Count the total number of likes from the LikesModel
        total_likes = LikesModel.objects.count()

        # Return the total likes count as a JSON response
        return Response({
            "total_likes": total_likes  # Return the count of likes
        })
