FROM python:3.10
ENV PYTHONUNBUFFERED 1
WORKDIR /my_supermarket/backend
COPY . .
RUN pip install  -r requirements.txt
RUN pip install python-decouple
RUN python manage.py makemigrations
RUN python manage.py migrate
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]