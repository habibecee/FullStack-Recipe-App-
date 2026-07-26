# 🍳 RecipeAPP — Full-Stack Recipe Management Application

![React](https://img.shields.io/badge/Frontend-React_18-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?logo=tailwind-css)
![React Query](https://img.shields.io/badge/State-TanStack_Query-FF4154?logo=react-query)
![Node.js](https://img.shields.io/badge/Backend-Node.js_/_Express-339933?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green)

A feature-rich, full-stack web application that enables users to discover, create, edit, and filter culinary recipes. Built with modern web technologies focusing on optimal user experience, efficient state management, and robust API endpoints.

---

## 📁 Project Structure

```text
recipe-app/
├── api/                 # Express.js Backend API
│   ├── index.js         # Entry point
│   ├── package.json
│   └── ...
├── client/              # React.js Frontend Application
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md            # Project documentation

🌟 Key Features
• Full CRUD Operations: Create, read, update, and delete recipes seamlessly.
• Advanced Filtering & Sorting: Dynamic search, categorization, and sorting capabilities handled directly via URL query parameters.
• Optimized Data Fetching: Asynchronous data caching, revalidation, and optimistic updates powered by @tanstack/react-query.
• Form Validation & Input Checks: Strict backend body-validation middleware to ensure data integrity before persistence.
• Responsive UI: Clean, modern, mobile-friendly interface styled with Tailwind CSS and custom UI components (react-select, lucide-react).
• Interactive Notifications: Real-time feedback and toast alerts using react-toastify.
🛠️ Tech Stack
Frontend (/client)
• Core: React.js, React Router DOM (v6+)
• State & Data Fetching: @tanstack/react-query, Axios
• Styling & UI: Tailwind CSS, Lucide React Icons, React Select
• User Feedback: React Toastify
Backend (/api)
• Runtime & Framework: Node.js, Express.js
• Development & Utility: Nodemon, CORS middleware
🔌 API Documentation
Base URL: http://localhost:5000/api/recipes (Default local server)
Method	Endpoint	Description	Query / Body Params
GET	/api/recipes	Fetch all recipes	Query Params: sort, filter, search
GET	/api/recipes/:id	Fetch details for a specific recipe	id (Route parameter)
POST	/api/recipes	Create a new recipe	Body: title, ingredients, instructions, etc.
PATCH	/api/recipes/:id	Update an existing recipe	Body: Fields to update
DELETE	/api/recipes/:id	Delete a recipe	id (Route parameter)
🚀 Getting Started
Follow these instructions to set up and run the project locally.
Prerequisites
• Node.js (v16.x or higher)
• npm or yarn
Installation & Setup
1. Clone the repository: git clone [https://github.com/YOUR-USERNAME/recipe-app.git](https://github.com/YOUR-USERNAME/recipe-app.git) cd recipe-app
2. Start the Backend Server (api): cd api npm install npm start # or npm run dev
3. Start the Frontend Application (client): Open a new terminal tab/window in the project root: cd client npm install npm start
📜 License
Distributed under the MIT License. See LICENSE for more information.