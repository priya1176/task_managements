from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Task

class TaskAPITest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)
        self.task = Task.objects.create(title='Test Task', description='Test Description', user=self.user)

    def test_register(self):
        response = self.client.post('/task/auth/register/', {'username': 'newuser', 'password': 'newpassword'})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_login(self):
        response = self.client.post('/task/auth/login/', {'username': 'testuser', 'password': 'testpassword'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_tasks(self):
        response = self.client.get('/task/tasks/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_task(self):
        response = self.client.post('/task/tasks/', {'title': 'New Task', 'description': 'New Description'})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_specific_task(self):
        response = self.client.get(f'/task/tasks/{self.task.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_task(self):
        response = self.client.put(f'/task/tasks/{self.task.id}/', {'title': 'Updated Task', 'description': 'Updated Description'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_task(self):
        response = self.client.delete(f'/task/tasks/{self.task.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_toggle_task(self):
        response = self.client.post(f'/task/tasks/{self.task.id}/toggle/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
