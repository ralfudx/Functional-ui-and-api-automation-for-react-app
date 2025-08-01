# Functional UI and API Automation for React App

This project consist of functional UI and API automation tests running against a **React** frontend and a **Node.js** backend API cloned from a full stack react application created by https://github.com/alexhippo. It supports basic **authentication** and **CRUD** operations. This README outlines the test strategy and how to run both UI and API automated tests.

---

## 🔍 What is Being Tested

The project tests both:
- **Functional UI behaviors** (with Cypress)
- **API endpoints** (with Jest + Supertest)

---

## ✅ Test Coverage Areas

### 🔐 UI Functional Tests (via Cypress)
- **Login Flow**
  - User sign in with correct credentials
  - User sign in with incorrect credentials
  - User sign in without credentials
- **Course Management**
  - Create a new course
  - Update an existing course
  - Delete an existing course
  - User sign out

### 🔧 API Endpoint Tests (via Jest + Supertest)
- `POST /api/users` - create new user
- `POST /api/users` - create new user with existing email
- `GET /api/users` - login authenticated user
- `GET /api/users` - login unauthenticated user
- `GET /api/courses` - retrieve all courses
- `GET /api/courses/ :id` - retrieve course with valid id
- `GET /api/courses/ :id` - retrieve course with invalid id
- `POST /api/courses` - create new course
- `PUT /api/courses/ :id` - update existing course while authorised
- `PUT /api/courses/ :id` - update existing course without authentication
- `PUT /api/courses/ :id` - update existing course when not authorised
- `PUT /api/courses/ :id` - update existing course with insufficient data
- `DELETE /api/courses/ :id` - delete existing course while authorised
- `DELETE /api/courses/ :id` - delete existing course without authentication
- `DELETE /api/courses/ :id` - delete existing course when not authorised


---

## 🧪 Tools Used

| Tool        | Purpose                      |
|-------------|------------------------------|
| **Cypress** | End-to-end UI automation     |
| **Jest**    | Unit and API testing         |
| **Supertest** | Simulates HTTP API calls   |

> These tools were chosen for their community support, simplicity, and effectiveness in testing React + Node.js applications.

---

## 🚀 How to Run the Tests

### 1. Start the Backend
```bash
#open a new terminal window - from the root directory
cd api
npm install
npm run seed
node app.js
```

### 2. Start the Frontend
```bash
#open a new terminal window - from the root directory
cd client
npm install
npm start
```

### 3. Run API Tests (Jest)
```bash
#open a new terminal window - from the root directory and restart the backend before running new tests
cd supertest-automation
npm install
npm test
```

### 4. Run UI Tests (Cypress)
```bash
#open a new terminal window - from the root directory and restart the backend before running new tests
cd cypress-automation
npm install
npx cypress open
#or for headless run:
npm test 
```

ProTip:
> Always restart the backend (run step 1 again) each time you want to rerun the API or UI Tests

---

## 📝 Assumptions & Limitations
- API tests run on a temporary server instance with in-memory data.
- No database is currently connected; test data resets on server restart.
- Cypress assumes the frontend is available at http://localhost:3000
- CORS must be configured if frontend and backend are served from different ports.


---

## 📁 Project Structure
```bash
Functional-ui-and-api-automation-for-react-app/
├── api/                   # Node.js backend
├── client/                # React frontend
├── cypress-automation/    # Cypress UI tests
│   ├── cypress/e2e/
│   │   └── courses.cy.ts
│   │   └── signIn.cy.ts
│   ├── cypress/pages/
│   │   └── Courses.ts
│   │   └── SignIn.ts
│   ├── cypress/support/
│   │   └── commands.ts
│   │   └── e2e.ts
│   │   └── type_def.ts
│   ├── cypress/test_data/
│   │   └── courses.ts
│   │   └── users.ts
│   ├── cypress.config.ts
│   ├── tsconfig.json
├── supertest-automation/  # Jest API tests
│   ├── test_data/
│   │   └── users.ts
│   ├── tests/
│   │   └── api.test.ts
│   ├── jest.config.ts
│   ├── tsconfig.json
├── README.md
```

Happy Testing! 🧪

---
