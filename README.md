# GoFood 🍕

<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="120">
</p>

<p align="center">
    <em>A modern food ordering web application built with the MERN stack</em>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
    <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React">
    <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB">
    <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" alt="Express">
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🍽️ Overview

GoFood is a full-stack food ordering web application that provides users with a seamless experience to browse restaurants, manage their cart, place orders, and track their order history. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it demonstrates modern web development practices including user authentication, RESTful APIs, and responsive design.

## ✨ Features

### User Management
- 🔐 **User Authentication** - Secure signup and login functionality
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 💾 **Local Storage Support** - Persistent user sessions

### Food Ordering
- 🍕 **Browse Menu** - View food items with categories and detailed descriptions
- 🛒 **Cart Management** - Add, remove, and update items with modal interface
- 📦 **Order Placement** - Streamlined checkout process
- 📋 **Order History** - View past orders with dates, quantities, and pricing

### User Experience
- 🎠 **Interactive Carousel** - Featured items and promotions
- 🃏 **Card-based Layout** - Clean, modern food item presentation
- 🔄 **Real-time Updates** - Dynamic cart and order status updates

## 🛠️ Tech Stack

**Frontend:**
- React.js - Component-based UI library
- CSS3 - Styling and responsive design
- Context API - State management

**Backend:**
- Node.js - JavaScript runtime
- Express.js - Web framework
- MongoDB - NoSQL database
- Mongoose - MongoDB object modeling

## 📁 Project Structure

```
goFood/
└── mernapp/
    ├── package.json
    ├── package-lock.json
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── components/
    │   │   ├── Card.jsx
    │   │   ├── Carousel.jsx
    │   │   ├── ContextReducer.jsx
    │   │   ├── Footer.jsx
    │   │   └── Navbar.jsx
    │   ├── screens/
    │   │   ├── Cart.jsx
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── MyOrder.jsx
    │   │   └── Signup.jsx
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   ├── index.css
    │   └── Modal.js
    └── backend/
        ├── models/
        │   ├── Orders.js
        │   └── User.js
        ├── Routes/
        │   ├── createUser.js
        │   ├── displayData.js
        │   └── orderData.js
        ├── db.js
        ├── index.js
        └── package.json
```

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/atharvsuranje/goFood.git
   cd goFood/mernapp
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd ..
   npm start
   ```

3. **Access the application**
   
   Open your browser and navigate to `http://localhost:3000`

## 🔗 API Endpoints

### User Authentication
- `POST /api/createuser` - Register new user
- `POST /api/loginuser` - User login

### Food Data
- `GET /api/foodData` - Fetch available food items and categories

### Orders
- `POST /api/orderData` - Place new order
- `GET /api/orderData` - Get user's order history

## 📱 Screenshots

*Add screenshots of your application here to showcase the UI/UX*

## 🤝 Contributing

We welcome contributions to GoFood! Here's how you can help:

1. **Fork the repository**
2. **Clone your fork locally**
   ```bash
   git clone https://github.com/your-username/goFood.git
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes and commit**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[React](https://reactjs.org/)** - Frontend library
- **[Node.js](https://nodejs.org/)** - Backend runtime
- **[Express.js](https://expressjs.com/)** - Web framework
- **[MongoDB](https://www.mongodb.com/)** - Database solution
- **[Unsplash](https://unsplash.com/)** - Sample food images
- MERN stack community and tutorials for inspiration

---

<p align="center">
    Made with ❤️ by <a href="https://github.com/atharvsuranje">Atharv Suranje</a>
</p>
