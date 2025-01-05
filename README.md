Start the Server:

Ensure your server is running by executing the following in your terminal:

bash
Copy code
node server.js
You should see a message like:

arduino
Copy code
Server running on port <port>
Test User Registration:

Method: POST
URL: http://localhost:<port>/api/v1/user/register
Body (JSON):
json
Copy code
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "phone_number": "1234567890"
}
You should receive a success message like:

json
Copy code
{
  "message": "User registered successfully",
  "user": {
    "user_id": 1,
    "username": "john_doe",
    "email": "john.doe@example.com",
    "phone_number": "1234567890"
  }
}
Test User Login:

Method: POST
URL: http://localhost:<port>/api/v1/user/sign-in
Body (JSON):
json
Copy code
{
  "email": "john.doe@example.com",
  "password": "password123"
}
You should receive a response with a JWT token like:

json
Copy code
{
  "message": "Login successful",
  "token": "<your_jwt_token>"
}
Test Creating a Blog:

Method: POST
URL: http://localhost:<port>/api/v1/blog/create
Headers:
Authorization: Bearer <your_jwt_token>
Body (JSON):
json
Copy code
{
  "title": "My First Blog",
  "description": "This is my first blog post.",
  "labels": ["Tech", "JavaScript"],
  "image_url": "https://example.com/image.jpg",
  "user_id": 1
}
You should receive a success message like:

json
Copy code
{
  "message": "Blog created successfully",
  "blog": {
    "blog_id": 1,
    "title": "My First Blog",
    "description": "This is my first blog post.",
    "labels": ["Tech", "JavaScript"],
    "image_url": "https://example.com/image.jpg",
    "user_id": 1
  }
}
Test Getting All Blogs:

Method: GET
URL: http://localhost:<port>/api/v1/blog/all
Headers:
Authorization: Bearer <your_jwt_token>
You should receive a list of all blogs.

Test Getting a Specific Blog:

Method: GET
URL: http://localhost:<port>/api/v1/blog/1/1
Headers:
Authorization: Bearer <your_jwt_token>
You should receive the specific blog details.

Test Updating a Blog:

Method: PUT
URL: http://localhost:<port>/api/v1/blog/1/1
Headers:
Authorization: Bearer <your_jwt_token>
Body (JSON):
json
Copy code
{
  "title": "Updated Blog Title",
  "description": "This is an updated blog post.",
  "labels": ["Tech", "Node.js"]
}
You should receive a success message with the updated blog details.

Test Deleting a Blog:

Method: DELETE
URL: http://localhost:<port>/api/v1/blog/1/1
Headers:
Authorization: Bearer <your_jwt_token>
You should receive a success message confirming the blog has been deleted.
