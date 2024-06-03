Task Management To-Do-List

This project is a web application built using Django Rest Framework (DRF) for the backend and React for the frontend.

1 Features

- User authentication and authorization
- User canManage their tasks Add task ,Edit task and disable when completed.
- RESTful API with Django Rest Framework
- Responsive UI with React and Bootstrap
- Database integration with PostgreSQL

2 Prerequisites

 Ensure you have the following installed on your local development machine:

- Python 3.9.5
- Node.js and npm (Node Package Manager)
- PostgreSQL
- Git

3 Installation

 Backend Setup (Django)

1 Clone the repository:
   cd your-repo/backend
   
2 Create a virtual environment and activate it:
   -python -m venv env
   -source env\Scripts\activate
   
Install the required Python packages:
pip install -r requirements.txt

Set up the PostgreSQL database:
Create a database
CREATE DATABASE yourdbname;

Create a user with password
CREATE USER yourdbuser WITH PASSWORD 'yourpassword';

Grant privileges to the user
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO yourdbuser;
Configure your Django settings:

Edit the backend/settings.py file to include your database credentials:

python
Copy code
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'yourdbname',
        'USER': 'yourdbuser',
        'PASSWORD': 'yourpassword',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
Apply migrations and create a superuser:


python manage.py migrate
python manage.py createsuperuser
Start the Django development server:

python manage.py runserver
Frontend Setup (React)
Navigate to the frontend directory:

Copy code
cd ../frontend
Install the required npm packages:

npm install
Start the React development server:



npm start
Running the Project
Backend
The Django server should be running on http://127.0.0.1:8000.

Frontend
The React development server should be running on http://localhost:3000.

Usage
Access the frontend application at http://localhost:3000.
Use the Django admin interface at http://127.0.0.1:8000/admin to manage the backend.
Explore the API endpoints at http://127.0.0.1:8000/api.



Project View:
![Screenshot (618)](https://github.com/priya1176/task_managements/assets/132778721/5fea14ad-cc69-4948-8650-2c397c653a5f)
