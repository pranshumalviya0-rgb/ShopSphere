# 🛒 ShopSphere

A full-stack MERN E-Commerce platform built using MongoDB, Express.js, React.js, and Node.js. The application provides a complete online shopping experience with authentication, product management, cart functionality, order processing, payment integration, and an admin dashboard.

---

## 🚀 Features

### User Features

- User Registration and Login
- JWT Authentication
- Product Browsing
- Product Search and Filtering
- Product Details
- Add to Cart
- Update Cart Quantity
- Checkout Process
- Order Placement
- Order History
- User Profile Management
- Product Reviews and Ratings

### Admin Features

- Admin Dashboard
- Product Management (Create, Read, Update, Delete)
- User Management
- Order Management
- Inventory Monitoring
- Sales Analytics

### Payment Features

- Online Payment Integration
- Payment Verification
- Order Confirmation

### Additional Features

- Image Upload Support
- Responsive Design
- Secure Authentication
- Role-Based Access Control

---

## 🏗️ Tech Stack

### Frontend

- React.js
- React Router
- Redux Toolkit
- Axios
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js

### Services

- Cloudinary
- Razorpay

---

## 📂 Project Structure

```bash
ShopSphere
│
├── frontend
│   ├── public
│   ├── src
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/<your-github-username>/ShopSphere.git
cd ShopSphere
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend directory and configure the following variables:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

## ▶️ Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm start
```

---

## 🌐 API Modules

### Authentication

- Register User
- Login User
- Get User Profile

### Products

- Get Products
- Get Product Details
- Create Product
- Update Product
- Delete Product

### Cart

- Add to Cart
- Update Cart
- Remove from Cart

### Orders

- Create Order
- Get Orders
- Update Order Status

### Payments

- Create Payment Order
- Verify Payment

### Admin

- Manage Products
- Manage Users
- Manage Orders
- View Analytics

---

## 📸 Screenshots


---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Repository

If you find this project useful, consider giving it a star.
