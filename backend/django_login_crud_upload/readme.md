
# CRUD with APIView in Django
This project demonstrates how to use Django's APIView class to handle full CRUD operations for a model.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites
Python 3.x
Django 3.x
djangorestframework 3.x

#  Installing


Clone the repository
```bash
git clone https://github.com/yourusername/yourrepo.git
```
Create a virtual environment and activate it
```bash
python -m venv myenv
myenv/Scripts/activate (Windows)

```
Install the required packages
```bash
pip install -r requirements.txt
```
Run the migrations to create the necessary tables in the database
```bash
python manage.py makemigrations
python manage.py migrate
```
Start the development server
```bash
python manage.py runserver
```
Test the CRUD operations using a tool such as Postman

Built With

Django - The web framework used

djangorestframework - The library used for creating RESTful APIs
