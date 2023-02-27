
# My Supermarket

A full supermarket with products where you can to register, login and do commands. Final's Project of my cours. 
This project is deployed on [Netlify](https://aquamarine-licorice-cdb598.netlify.app/) for the react app and on [Render](https://aquamarine-licorice-cdb598.netlify.app/) for the Django app.


## Features

- Register + LogIn
- Admin Panel using Django Administration
- Commands Products 
- See Commands Details


## Tech Stack

**Frontend:** React, Redux, Bootstrap

**Backend:** Python, Django, Rest Framework API, JWT (JSON Web Token), SQL3, Docker 

**Cloud:** Render, netlify




## Installation


### With docker 


Clone my_supermarket with npm

```bash
  git clone https://github.com/ezechielemsallem/my_supermarket.git 
```

Build the image with Docker Compose command 

```bash
  docker-compose build
```

Run in Docker Container

```bash
  docker-compose up
```

Visit http://0.0.0.0:3000 in your browser after your containers have been initialized and activated.
    

### Local Deployment

Install virtualenv 

```bash 
python -m pip install virtualenv
```


#### Mac 

```bash 
virtualenv venv
```

#### Windows 

```bash 
.\venv\Scripts\activate
```

Go to the backend folder and run the django application 

```bash 
cd backend/django_login_crud_upload
```

install the packages 

```bash 
pip install -r requirements.txt
```
run the app 

```bash 
python manage.py runserver
```

Go the react application 

```bash 
cd frontend/app
```

Install the packages

```bash 
npm install 
```


Run the app

```bash 
npm start
```









