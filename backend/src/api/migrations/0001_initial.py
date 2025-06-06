# Generated by Django 5.1.5 on 2025-01-21 17:44

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CountriesModel',
            fields=[
                ('country_id', models.AutoField(db_column='countryId', primary_key=True, serialize=False)),
                ('country_name', models.CharField(db_column='countryName', max_length=56, unique=True, validators=[django.core.validators.MinLengthValidator(2)])),
            ],
            options={
                'db_table': 'countries',
            },
        ),
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('user_id', models.AutoField(db_column='userId', primary_key=True, serialize=False)),
                ('first_name', models.CharField(db_column='firstName', max_length=45)),
                ('last_name', models.CharField(db_column='lastName', max_length=45)),
                ('email', models.EmailField(max_length=45, unique=True)),
                ('password', models.CharField(max_length=128)),
                ('role_id', models.IntegerField(db_column='roleId', validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(2)])),
            ],
            options={
                'db_table': 'users',
            },
        ),
        migrations.CreateModel(
            name='VacationModel',
            fields=[
                ('vacation_id', models.AutoField(db_column='vacationId', primary_key=True, serialize=False)),
                ('vacation_info', models.TextField(blank=True, db_column='vacationInfo', null=True)),
                ('vacation_start', models.DateField(db_column='vacationStart')),
                ('vacation_end', models.DateField(db_column='vacationEnd')),
                ('price', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10000)])),
                ('pic_name', models.CharField(blank=True, db_column='picName', max_length=450, null=True)),
                ('country_id', models.ForeignKey(db_column='countryId', on_delete=django.db.models.deletion.PROTECT, to='api.countriesmodel')),
            ],
            options={
                'db_table': 'vacations',
            },
        ),
        migrations.CreateModel(
            name='LikesModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.ForeignKey(db_column='userId', on_delete=django.db.models.deletion.PROTECT, to='api.usermodel')),
                ('vacation_id', models.ForeignKey(db_column='vacationId', on_delete=django.db.models.deletion.PROTECT, to='api.vacationmodel')),
            ],
            options={
                'db_table': 'likes',
            },
        ),
    ]
