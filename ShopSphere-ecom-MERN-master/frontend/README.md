# 🌌 ShopSphere — React & Redux Frontend Client

This is the Single Page Application (SPA) client interface for **ShopSphere**, built with React, Redux Toolkit, and React Router.

## 🚀 Key Implementation Highlights

- **Redux State Management:** Configured via Redux Toolkit (`redux/cartSlice.js` and `redux/store.js`) to handle transactional shopping cart actions (add, remove, adjust quantities) client-side.
- **Dynamic Routing:** Built with React Router v6 (`App.jsx`) including parameter-based routes for product details (`/product/:id`) and administrative editing routes.
- **Context API for Auth:** Custom React Context (`context/AuthContext.jsx`) managing stateless user login flows and token validation securely.
- **Responsive Theme System:** Coded in modular vanilla CSS inside the `styles/` directory to support smooth hover transitions, glassmorphic layout features, custom scrollbars, and fluid grids.

## 📁 Folder Structure

```
src/
├── admin/         # Dashboard panels, product creation & user lists
├── components/    # Reusable layouts (Navbar, Footer, Product Cards)
├── context/       # Authentication React contexts
├── pages/         # Storefront views (Shop, Cart, Checkout, Profile, About)
├── redux/         # Cart slices & Redux store setups
└── styles/        # CSS styling systems (Global, Auth, Products, Cart)
```

## 🛠️ Build Commands

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build production bundle
```bash
npm run build
```
The optimized bundle compiles to `build/` and is served statically by the backend server in production configurations.
