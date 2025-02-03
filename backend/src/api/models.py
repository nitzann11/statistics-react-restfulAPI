from django.db.models import Model, IntegerField, DateField, CharField, TextField, EmailField, AutoField, ForeignKey, PROTECT
from django.core.validators import MinLengthValidator, MinValueValidator, MaxValueValidator
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import AbstractUser

# Table Definitions

class CountriesModel(Model):
    """
    Represents a country in the database.

    Fields:
    - country_id: Auto-incrementing primary key for each country.
    - country_name: Name of the country, must be unique and at least 2 characters long.
    """
    country_id = AutoField(primary_key=True, db_column='countryId')  # Primary key for the country
    country_name = CharField(max_length=56, unique=True, validators=[MinLengthValidator(2)], db_column='countryName')  # Country name, unique and minimum length of 2

    class Meta:
        db_table = "countries"  # Table name in the database


class VacationModel(Model):
    """
    Represents a vacation booking or package.

    Fields:
    - vacation_id: Auto-incrementing primary key for each vacation.
    - vacation_info: Optional text field providing information about the vacation.
    - country_id: Foreign key to the CountriesModel, indicating the destination country.
    - vacation_start: Start date of the vacation.
    - vacation_end: End date of the vacation.
    - price: Price of the vacation, validated to be between 1 and 10,000.
    - pic_name: Optional field for storing the name of a picture associated with the vacation.
    """
    vacation_id = AutoField(primary_key=True, db_column='vacationId')  # Primary key for vacation
    vacation_info = TextField(null=True, blank=True, db_column='vacationInfo')  # Optional description about the vacation
    country_id = ForeignKey(CountriesModel, on_delete=PROTECT, db_column="countryId")  # Foreign key to the CountriesModel
    vacation_start = DateField(db_column='vacationStart')  # Vacation start date
    vacation_end = DateField(db_column='vacationEnd')  # Vacation end date
    price = IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10000)])  # Price of the vacation (between 1 and 10,000)
    pic_name = CharField(max_length=450, blank=True, null=True, db_column="picName")  # Optional field for picture name

    class Meta:
        db_table = "vacations"  # Table name in the database


class UserModel(AbstractUser):
    """
    Represents a user who can book vacations and manage their account.

    Fields:
    - user_id: Auto-incrementing primary key for each user.
    - first_name: User's first name.
    - last_name: User's last name.
    - email: Unique email address used for login.
    - password: User's password (hashed).
    - role_id: Role of the user, either 1 (admin) or 2 (regular user), default is 2.
    """
    user_id = AutoField(primary_key=True, db_column='userId')  # Primary key for user
    first_name = CharField(max_length=255, db_column='firstName')  # User's first name
    last_name = CharField(max_length=255, db_column='lastName')  # User's last name
    email = EmailField(max_length=255, unique=True)  # User's email, used for login
    username = None  # Removed since email is used for authentication
    password = CharField(max_length=255)  # Hashed password for the user
    role_id = IntegerField(validators=[MinValueValidator(1), MaxValueValidator(2)], db_column='roleId', default=2)  # User role, either admin or regular user

    # Specifies that email is the unique identifier for authentication
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role_id']

    class Meta:
        db_table = "users"  # Table name in the database

    def set_password(self, raw_password):
        """
        Hashes the password before saving it to the database.
        """
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        """
        Checks if the provided password matches the hashed password.
        """
        return check_password(raw_password, self.password)


class LikesModel(Model):
    """
    Represents a like action by a user for a specific vacation.

    Fields:
    - user_id: Foreign key to the UserModel, indicating which user liked the vacation.
    - vacation_id: Foreign key to the VacationModel, indicating which vacation is liked.
    """
    user_id = ForeignKey(UserModel, on_delete=PROTECT, db_column='userId')  # Foreign key to the UserModel
    vacation_id = ForeignKey(VacationModel, on_delete=PROTECT, db_column='vacationId')  # Foreign key to the VacationModel

    class Meta:
        db_table = 'likes'  # Table name in the database
