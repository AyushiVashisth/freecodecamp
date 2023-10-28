<h1 align="center">📚 FreeCodeCamp Website 📚</h1>

<h3 align="justify" width="80%">

Create a web app using Node.js and MongoDB with a homepage featuring a "Sign In" button. Clicking it leads to a sign-in page with options to register using email or Google. User data is stored in MongoDB, and if an email already exists, an error is shown. Successful sign-ins generate JWT tokens for persistent login. Display mock course data from MongoDB on another page. Implement secure JWT authentication, password hashing, and user-friendly error handling. Consider session management, security, and user experience. While complex, this process can be simplified with web frameworks like Express.js and React, enhancing scalability and maintainability.. [Assignment.pdf](https://docs.google.com/document/d/1JcQ6wYdjKqC-yQH8fQecaJtMTd-4jwFKWh5Ij3Pf1GU/edit)

### Frontend Deployed URL 👉 [Click here](https://freecodecamp-chi.vercel.app/)
### Backend Respositry URL 👉 [Click here](https://freecodecamp-gkj9.onrender.com/)

</h3>

<br/>

<h2 align="center">Technologies Used</h2>

<p align="center">
  <b>Frontend</b><br>
  <img src="https://img.shields.io/badge/react-%23323330.svg?style=for-the-badge&logo=react&logoColor=%23F7DF1E" alt="react">
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss">
</p>

<p align="center">
  <b>Tools</b><br>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github">
  <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="vscode">
</p>

<p align="center">
  <b>Deployment</b><br>
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel">
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="netlify">
</p>

<h2 align="center">Features</h2>

**Frontend:**

- Home Page:
  - Sign In button in the top navbar.
  - JavaScript for button click navigation.

- Sign-In Page:
  - Input fields for name, email, and password.
  - Google Sign-In option.
  - Form submission for user registration.
  
- JWT Token:
  - Generate a JWT token on successful sign-in.
  - Store the token securely on the client side.
  
- Session Persistence:
  - Store JWT token in a long-lived cookie for persistent login.
  
- Display Mock Data:
  - API endpoint for fetching course data.
  - JavaScript for fetching and displaying the data on the client side.

**Backend:**

- Node.js Setup:
  - Node.js project using Express.js.

- Database Setup:
  - MongoDB for user credentials and course data.
  - User collection for registration information.
  - Course collection for course data.

- User Registration:
  - Registration route for user information.
  - Check for existing emails before registration.

- User Authentication:
  - Sign-in route for email and password authentication.
  - JWT token generation upon successful sign-in.
  - Google Sign-In via OAuth2.0.

- Course Data:
  - Route for fetching course data from MongoDB and sending it to the client.

- Middleware:
  - Verify JWT tokens for protected routes.

**Additional Considerations:**

- Frontend Routing:
  - Implement frontend routing for different pages.

- Password Hashing:
  - Securely hash user passwords before storage.

- User Session Management:
  - Implement session management and token refreshing.

- Error Handling:
  - Handle errors for various scenarios.

- Security:
  - Rate limiting, CORS policy, and input validation.

- User Experience:
  - Password reset, error messages, and validation checks.

- Testing:
  - Unit and integration tests for application robustness.


## Home

## Login

## Course

<div >
  <img width="46%" src="https://github.com/AyushiVashisth/voice2textapp/assets/107119119/40e31cd0-ad0b-4180-a94c-af49757dc7f8" alt="react">
  <img width="46%" src="https://github.com/AyushiVashisth/voice2textapp/assets/107119119/efc5ac17-ab64-4f57-9086-583aada0f468" alt="tailwindcss">
</div>


<h2 align="center">Key Features</h2>

1. **User Registration:**
   - Users can register with their name, email, and password.
   - User registration data is stored in a MongoDB collection.

2. **Sign-In and Authentication:**
   - Users can sign in using their registered email and password.
   - JWT (JSON Web Tokens) are generated upon successful authentication for secure sessions.
   - OAuth2.0 authentication with Google accounts is supported.

3. **Persistent Login:**
   - User sessions are maintained even after the browser is restarted by storing JWT tokens securely (e.g., in cookies).

4. **Email Existence Check:**
   - During registration, the system checks if the provided email already exists in the database and shows an error if it does.

5. **Course Data Display:**
   - The application displays mock course data from a MongoDB collection, including course titles and durations, on a designated page (Fig 2).

6. **Secure Password Handling:**
   - User passwords are securely hashed before storage to protect user credentials.

7. **Session Management:**
   - Implement session management and token refreshing mechanisms to ensure a secure and seamless user experience.

8. **Frontend and Backend Routing:**
   - Use frontend routing for navigating between different pages or sections.
   - Backend routing is implemented to handle various API endpoints and user requests.

9. **Error Handling:**
   - The application includes error handling for scenarios such as incorrect credentials, database errors, and API failures to provide a smooth user experience.

10. **Security Measures:**
    - Implement security measures such as rate limiting, CORS policy management, and validation of user input to enhance application security.

11. **User Experience Enhancements:**
    - Include user-friendly features like password reset functionality, clear error messages, and input validation checks.

12. **Testing:**
    - Write unit and integration tests to ensure the application functions as expected and to catch potential issues.

<h2 align="center">Getting Started</h2>

1. Clone the repository to your local machine.
2. Set up the backend API using Express and Mongoose (provide instructions if necessary).
3. Navigate to the project directory.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.

<h3>This is an individual project that I developed as a solo full-stack web developer within a span of 5 day.</h3>

<h2 align="center">Contribution Guidelines</h2>

We welcome contributions to the FreeCodeCamp project. If you have ideas for new features or find any bugs, please open an issue in the repository. Pull requests are also encouraged.

<h2 align="center">Show Your Support</h2>

If you find this project interesting or valuable, please consider giving it a ⭐️.

<h1 align="center">📚 Happy Exploring! 📚</h1>
