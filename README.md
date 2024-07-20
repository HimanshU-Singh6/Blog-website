# Blog Website

This is a Blog Website built with React and Vite, using Appwrite as the backend. The application leverages Redux Toolkit for state management, Tailwind CSS for styling, and provides authentication functionality.

## Features

- **Authentication**: Secure login and registration using Appwrite.
- **CRUD Operations**: Create, read, update, and delete blog posts.
- **State Management**: Efficient state management using Redux Toolkit.
- **Responsive Design**: Optimized for both desktop and mobile screens.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Appwrite**: Backend server for authentication and database operations.
- **Redux Toolkit**: For state management within the app.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Installation

1. **Clone the Repository**:

2. **Install Dependencies**:
   npm install

3. **Set Up Appwrite**:
   - Follow the [Appwrite installation guide](https://appwrite.io/docs/installation) to set up your Appwrite server.
   - Create a project and note down your Project ID.
   - Set up the authentication service and a database collection for blog posts.

4. **Configure Environment Variables**:
   Create a `.env` file in the root of the project with the following content:
   ```plaintext
   VITE_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
   VITE_APPWRITE_PROJECT_ID=<Your Appwrite Project ID>
   VITE_APPWRITE_DATABASE_ID=<Your Appwrite Database ID>
   ```

5. **Run the Application**:
   npm run dev


.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Appwrite](https://appwrite.io/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---
