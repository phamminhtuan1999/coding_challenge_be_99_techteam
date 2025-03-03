# User Management API

A simple CRUD API built with Express, TypeScript, and TypeORM using MongoDB as the database.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Install MongoDB if not already installed:

```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
```

Here's the complete README file for your User Management API:

````markdown:/Users/matthew/development/coding_challenge_be_99_techteam/problem 5/README.md
# User Management API

A simple CRUD API built with Express, TypeScript, and TypeORM using MongoDB as the database.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Install MongoDB if not already installed:
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
````

2. Start MongoDB service:

```bash
brew services start mongodb-community@7.0
```

3. Clone the repository and install dependencies:

```bash
npm install
```

## Configuration

The database configuration is in `ormconfig.json`. Default settings:

- Host: localhost
- Port: 27017
- Database: account_svc

## Running the Application

1. Start the server:

```bash
npm start
```

The server will run on http://localhost:3000

## API Endpoints

### Create User

- **POST** `/users`
- Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "description": "Test user"
}
```

### Get All Users

- **GET** `/users`

### Get User by ID

- **GET** `/users/:id`

### Update User

- **PUT** `/users/:id`
- Body:

```json
{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```

### Delete User

- **DELETE** `/users/:id`

## Testing the API

1. Make the test script executable:

```bash
chmod +x test-api.sh
```

2. Run the tests:

```bash
./test-api.sh
```

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## Data Model

User Entity:

- \_id: ObjectId (auto-generated)
- name: string (required)
- email: string (optional)
- description: string (optional)
- createdAt: Date (auto-generated)
- updatedAt: Date (auto-generated)

## Project Structure

```
.
├── src/
│   ├── entity/
│   │   └── user.ts
│   ├── app-data-source.ts
│   └── index.ts
├── test-api.sh
├── ormconfig.json
├── package.json
└── README.md
```

## Scripts

- `npm start`: Start the application
- `npm run build`: Build the TypeScript code
- `npm run dev`: Run the application in development mode

```

```
