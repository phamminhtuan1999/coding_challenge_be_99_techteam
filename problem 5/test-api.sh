#!/bin/bash

BASE_URL="http://localhost:3000"

# Create a user
echo "Testing CREATE user..."
CREATE_RESPONSE=$(curl -s -X POST "${BASE_URL}/users" \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "description": "Test user"}')
USER_ID=$(echo $CREATE_RESPONSE | grep -o '"_id":"[^"]*' | cut -d'"' -f4)
echo "Created user with ID: $USER_ID"
echo "Response: $CREATE_RESPONSE"
echo

# Get all users
echo "Testing GET all users..."
curl -s "${BASE_URL}/users" | json_pp
echo

# Get user by ID
echo "Testing GET user by ID..."
curl -s "${BASE_URL}/users/${USER_ID}" | json_pp
echo

# Update user
echo "Testing UPDATE user..."
curl -s -X PUT "${BASE_URL}/users/${USER_ID}" \
  -H "Content-Type: application/json" \
  -d '{"name": "John Updated", "email": "john.updated@example.com"}' | json_pp
echo

# Get updated user
echo "Testing GET updated user..."
curl -s "${BASE_URL}/users/${USER_ID}" | json_pp
echo

# Delete user
echo "Testing DELETE user..."
curl -s -X DELETE "${BASE_URL}/users/${USER_ID}" -w "Status code: %{http_code}\n"
echo

# # Verify deletion
# echo "Testing GET deleted user (should return 404)..."
# curl -s "${BASE_URL}/users/${USER_ID}" -w "Status code: %{http_code}\n"