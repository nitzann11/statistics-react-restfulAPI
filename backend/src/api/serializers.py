from api.models import UserModel, LikesModel, VacationModel, CountriesModel
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

# Model Serializers

class CountriesSerializer(serializers.ModelSerializer):
    """
    Serializer for the CountriesModel.

    Fields:
    - country_id: Auto-incrementing ID of the country.
    - country_name: Name of the country, must be unique.
    """
    class Meta:
        model = CountriesModel  # Serializer uses the CountriesModel
        fields = '__all__'  # Include all fields in the model


class VacationSerializer(serializers.ModelSerializer):
    """
    Serializer for the VacationModel.

    Fields:
    - vacation_id: Auto-incrementing ID of the vacation.
    - vacation_info: Description of the vacation.
    - country_id: Foreign key to CountriesModel, representing the vacation's destination.
    - vacation_start: Start date of the vacation.
    - vacation_end: End date of the vacation.
    - price: Price of the vacation.
    - pic_name: Optional image associated with the vacation.
    """
    class Meta:
        model = VacationModel  # Serializer uses the VacationModel
        fields = '__all__'  # Include all fields in the model


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the UserModel.

    Fields:
    - user_id: Auto-incrementing ID of the user.
    - first_name: First name of the user.
    - last_name: Last name of the user.
    - email: Email address of the user (used as the login).
    - password: User's password (write-only).
    - role_id: Role of the user, either 1 (admin) or 2 (regular user).
    """
    class Meta:
        model = UserModel  # Serializer uses the UserModel
        fields = ['user_id', 'first_name', 'last_name', 'email', 'password', 'role_id']
        extra_kwargs = {'password': {'write_only': True}}  # Ensures password is write-only and not included in responses

    def create(self, validated_data):
        """
        Override the default create method to handle password hashing.
        
        After the user is created, the password is hashed before saving.
        """
        password = validated_data.pop('password', None)  # Remove password from the validated data
        instance = self.Meta.model(**validated_data)  # Create the user instance
        if password is not None:
            instance.set_password(password)  # Set the hashed password
        instance.save()  # Save the user instance
        return instance


class LikesSerializer(serializers.ModelSerializer):
    """
    Serializer for the LikesModel.

    Fields:
    - user_id: Foreign key to the UserModel, representing the user who liked the vacation.
    - vacation_id: Foreign key to the VacationModel, representing the vacation that was liked.
    """
    class Meta:
        model = LikesModel  # Serializer uses the LikesModel
        fields = '__all__'  # Include all fields in the model
