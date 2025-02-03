from django.db.models import F, Count  # Import functions for database queries
from rest_framework.views import APIView  # Import base class for API views
from rest_framework.response import Response  # Response class to send HTTP responses
from rest_framework.permissions import IsAuthenticated  # Permission class to restrict access to authenticated users
from ..models import LikesModel  # Import the LikesModel for querying the likes data

class LikesDistributionView(APIView):
    """
    API view that retrieves the distribution of likes for vacation destinations.

    The API calculates the total number of likes for each vacation destination and returns
    a list of destinations sorted by the most liked.
    
    Permissions:
    - Only authenticated users can access this view (IsAuthenticated).

    GET request:
    - Returns a list of vacation destinations and their corresponding like count.
    """

    # Restrict access to authenticated users only
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """
        GET request handler for retrieving the likes distribution across vacation destinations.

        - Queries the LikesModel to get the count of likes for each destination.
        - Aggregates the data using Django's `Count` and `F` functions.
        - Returns the destinations sorted by the number of likes in descending order.

        Returns:
        - A JSON response with a list of destinations and their like count.
        """
        
        # Query the LikesModel to calculate the likes distribution
        likes_distribution = (
            LikesModel.objects
            .values(destination=F('vacation_id__country_id__country_name'))  # Group by country name
            .annotate(likes=Count('id'))  # Count the number of likes per destination
            .order_by('-likes')  # Order the destinations by the number of likes in descending order
        )

        # Return the distribution as a list in the response
        return Response(list(likes_distribution))
