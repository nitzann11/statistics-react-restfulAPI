from dotenv import load_dotenv
from os import environ

load_dotenv()

class Appconfig:
    mysql_host = environ.get('MYSQL_HOST')
    mysql_user = environ.get('MYSQL_USER')
    mysql_password = environ.get('MYSQL_PASSWORD')
    mysql_database = environ.get('MYSQL_DATABASE')
    mysql_port = environ.get('MYSQL_PORT')
    jwt_salt = environ.get('JWT_SALT')
    secret_key = environ.get('SECRET_KEY')