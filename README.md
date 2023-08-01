# Collaborative Text Editor

This is a simple real-time collaborative text editor built with React, TypeScript, Node.js, Express, and Socket.IO. Multiple users can edit the same document simultaneously, similar to Google Docs.

## Requirements

- Node.js (v14+ recommended)
- npm (comes with Node.js)

## Project Structure

- `client`: This directory contains the React frontend.
- `server`: This directory contains the Node.js/Express backend.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jennhuynh02/collaborative-text-editor.git
   ```

2. Install the dependencies in both `client` and `server` directories:
   ```bash
   cd collaborative-text-editor/client
   npm install
   cd ../server
   npm install
   ```

## Running the Application

1. Start the server:

   ```bash
   cd server
   npm start
   ```

2. In another terminal window, start the React application:

   ```bash
   cd ../client
   npm start
   ```

3. Open `http://localhost:3000` in multiple browser windows to test the real-time collaboration.

## About the Application

The server uses Socket.IO to establish a real-time, bi-directional communication between the server and the client. When a user makes changes in the text editor, those changes are sent to the server, which then broadcasts the changes to all other connected clients.

On the frontend, the Ace Editor library is used to create the text editor. Changes in the text editor are sent to the server using a Socket.IO client.

This application does not support persistence, so changes will be lost if the server is restarted. It also does not support multiple documents; all users will see and edit the same document.

## Future Improvements

- Add user authentication to allow users to have their own documents.
- Implement a database for storing and retrieving documents.
- Add support for rich text editing.
