from rest_framework.views import APIView  # Import base class for API views
from rest_framework.response import Response  # Response class to send HTTP responses
from datetime import datetime  # To get the current date
from ..models import VacationModel  # Import the VacationModel to query vacation data

class VacationsStatsView(APIView):
    """
    API view that retrieves statistics on vacations.

    The API calculates the number of past, ongoing, and future vacations based on the current date.
    
    GET request:
    - Returns the count of past, ongoing, and future vacations.
    """

    def get(self, request):
        """
        GET request handler for retrieving vacation statistics.

        - Filters vacations based on the current date.
        - Returns the count of past vacations (ended before today),
          ongoing vacations (start date before today and end date after today),
          and future vacations (start date after today).

        Returns:
        - A JSON response with the vacation statistics.
        """
        
        today = datetime.now().date()  # Get the current date

        # Query all vacations
        vacations = VacationModel.objects.all()

        # Filter and count past, ongoing, and future vacations
        past_vacations = vacations.filter(vacation_end__lt=today).count()  # Vacations that have ended
        ongoing_vacations = vacations.filter(
            vacation_start__lte=today, vacation_end__gte=today).count()  # Vacations happening today
        future_vacations = vacations.filter(vacation_start__gt=today).count()  # Vacations starting in the future

        # Return the statistics as a JSON response
        return Response({
            "destination": "all vacations",  # Label for the data set
            "past_vacations": past_vacations,  # Number of past vacations
            "ongoing_vacations": ongoing_vacations,  # Number of ongoing vacations
            "future_vacations": future_vacations,  # Number of future vacations
        })
