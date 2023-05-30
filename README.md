# Wearsu-Fullstack

Wearsu is a web application that allows users to create, edit, delete, and list products. The application is designed to facilitate product management by providing an intuitive interface.

<img src="/preview-pictures/preview-picture-1.png" width="400" /> <img src="/preview-pictures/preview-picture-2.png" width="400" /> <img src="/preview-pictures/preview-picture-3.png" width="400" /> 
<img src="/preview-pictures/preview-picture-4.png" width="400" /> <img src="/preview-pictures/preview-picture-5.png" width="400" /> <img src="/preview-pictures/preview-picture-6.png" width="400" />

## Main Technologies
### Back-end
- Node.js
- Express
- Typescript
- JWT
- PostgreSQL
- Prisma ORM

### Front-end
- React.js
- Material UI
- Axios

### DevOps
- Docker
- Nginx

## Features
- User Registration
- User Login
- Product Listing: Users can view a list of their registered products.
- Product Creation: Users can add new products by specifying their name, price, description, image, model, quantity, and brand.
- Product Editing: Users can modify the information of an existing product.
- Product Deletion: Users can delete a product from the list.
- Pagination: The list of products is divided into pages for easy navigation.

## How to run Docker containers on your local machine
1. Make sure you have [Docker](https://www.docker.com/) installed on your machine.
2. Clone this repository
```bash
git clone https://github.com/lucasdosualdo/Wearsu-Fullstack
```
3. Create the .env files in the root of the frontend and backend folders according to the .env.example files

Example on backend .env:
```bash
PORT=5000
JWT_SECRET=your_secret_key
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/wearsu?schema=public
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=wearsu
```
Example on frontend .env:
```bash
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

4. Run
```bash
docker compose up -d
```
5. Finally, access http://localhost:8080 on your favorite browser.
