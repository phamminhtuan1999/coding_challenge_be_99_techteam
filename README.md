```markdown:/Users/matthew/development/coding_challenge_be_99_techteam/README.md
# Technical Team Coding Challenge Solutions

This repository contains solutions for three different coding challenges.

## Problem 4: Sum to N Implementation

Implementation of three different approaches to calculate the sum of numbers from 1 to n.

### Features
- Iterative approach
- Mathematical formula approach
- Recursive approach

### Directory Structure
```

problem 4/
├── index.ts
└── README.md

````

### Running the Code
```bash
cd problem\ 4
tsc index.ts
node index.js
````

## Problem 5: User Management API

A CRUD API implementation using Express.js, TypeScript, TypeORM, and MongoDB.

### Features

- Create, Read, Update, Delete operations for users
- MongoDB integration
- Input validation
- Error handling
- API testing script

### Directory Structure

```
problem 5/
├── src/
│   ├── entity/
│   │   └── user.ts
│   ├── app-data-source.ts
│   └── index.ts
├── test-api.sh
├── ormconfig.json
└── README.md
```

### Setup and Running

1. Start MongoDB:

```bash
brew services start mongodb-community@7.0
```

2. Install dependencies:

```bash
cd problem\ 5
npm install
```

3. Run the application:

```bash
npm start
```

4. Test the API:

```bash
chmod +x test-api.sh
./test-api.sh
```

## Problem 6: Scoreboard API Service

A real-time scoreboard system with WebSocket integration and security measures.

### Features

- Score update API
- Leaderboard retrieval
- Real-time updates via WebSocket
- Security measures for score manipulation prevention
- User authentication

### Directory Structure

```
problem 6/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
├── migrations/
└── README.md
```

### Technology Stack

- Express.js
- PostgreSQL
- Socket.IO
- JWT Authentication

### Key Components

- Score update endpoint
- Leaderboard retrieval
- WebSocket integration
- Database schema for users, actions, and user actions
- Security measures and rate limiting

## General Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd coding_challenge_be_99_techteam
```

2. Install global dependencies:

```bash
npm install -g typescript ts-node
```

3. Install project dependencies:

```bash
npm install
```

## Development

- Each problem is contained in its own directory
- TypeScript is used across all problems
- ESLint is configured for code quality
- Each problem has its own README with specific instructions

## Testing

- Problem 4: Unit tests for each implementation
- Problem 5: API testing script included
- Problem 6: Integration tests for API endpoints

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Run tests
4. Submit a pull request

## License

MIT License

```

```
