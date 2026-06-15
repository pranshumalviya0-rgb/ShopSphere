# 🌌 ShopSphere — MERN E-Commerce Architecture

ShopSphere is a high-performance, full-stack e-commerce engine designed to deliver custom storefront layouts, dynamic cart state management, sandbox payment systems, and responsive administrative dashboards. 

This repository serves as an end-to-end full-stack demonstration showcase illustrating modular database architectures, custom security middlewares, and polished user-facing experiences.

**Developer:** Pranshu  
**Tech Stack:** MongoDB, Express, React, Node (MERN)

---

## 🛠️ System Architecture

ShopSphere splits concerns between a responsive frontend client and a stateless RESTful API server.

```
                  ┌────────────────────────┐
                  │     React Client       │ (Redux Toolkit State)
                  └───────────┬────────────┘
                              │
                    HTTPS REST Requests
                              │
                              ▼
                  ┌────────────────────────┐
                  │    Express API Gateway │ (JWT Auth & Role Validation)
                  └─────┬───────────┬──────┘
                        │           │
           DB Operations│           │Asset Storage
                        ▼           ▼
               ┌─────────────┐  ┌─────────────┐
               │   MongoDB   │  │ Cloudinary  │
               └─────────────┘  └─────────────┘
```

---

## ⚡ Core Features

- **Advanced Client State Flow:** Configured using Redux Toolkit to provide fluid local updates for cart operations without constant backend database lookups.
- **Role-Based Authentication:** Employs stateless JWT tokens with customized middleware validation to separate generic user endpoints from critical administrative dashboard routes.
- **Transactional Simulation:** Integrated with Razorpay Sandbox APIs to simulate real-world order flows, signature checks, and transaction status logging.
- **Dynamic Content Pipelines:** Seamless integration with Cloudinary utilizing Multer to validate and resize administrative inventory uploads.
- **Administrative Suite:** Real-time dashboards monitoring total metrics (revenue totals, order status counts, user listings) with operational states (pending, shipped, delivered).

---

## 💻 Technology Stack

| Layer | Technology | Primary Functionality |
| :--- | :--- | :--- |
| **Frontend** | React 18, React Router 6 | Component-driven SPA structure |
| **State** | Redux Toolkit | Predictable, transactional cart logic |
| **Backend** | Node.js, Express.js | Modular, asynchronous API controllers |
| **Database** | MongoDB, Mongoose | Schema validation & relation simulation |
| **Storage** | Cloudinary, Multer | Media pipeline management |
| **Payments** | Razorpay SDK | Sandbox billing simulation |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or above)
- MongoDB Instance (local running port 27017 or Atlas URI connection string)

### 1. Dependency Alignment
Align and compile node packages across both sub-folders:
```bash
npm run install-all
```

### 2. Environment Configurations
Rename `backend/.env.example` to `backend/.env` and load required configurations:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/shopsphere
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_email_password
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Database Ingestion
Seed sample inventory data and the initial administrative account details:
```bash
npm run seed
```
* **Seeded Admin Credentials:** `admin@shopsphere.com` / `password123`

### 4. Local Execution
Initialize concurrently both frontend and backend development configurations:
```bash
npm run dev
```
- Client Viewport: `http://localhost:3000`
- REST Gateway: `http://localhost:5000`

---

## 📈 API Endpoints Overview

Import `ShopSphere_Postman_Collection.json` directly into your API testing terminal to interact with the following routes:

| HTTP Method | Route Endpoint | Guard / Role | Goal |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Open | Create user profile & generate access token |
| **POST** | `/api/auth/login` | Open | Authenticate profile & verify permissions |
| **GET** | `/api/auth/users` | Admin Only | List active registered profiles |
| **GET** | `/api/products` | Open | Retrieve catalog inventory |
| **POST** | `/api/products` | Admin Only | Upload new inventory matching schema constraints |
| **POST** | `/api/orders` | Auth Profile | Compile transactional order log & send email alerts |
| **GET** | `/api/analytics` | Admin Only | Process administrative analytical indicators |

---

## 📄 License
Released under the [MIT License](LICENSE).
