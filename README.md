# 📝 Multi-User Blogging Platform

A full-featured multi-user blogging website built using the **MERN stack** with **Next.js** for SSR and optimized performance. Users can sign up, write blogs, manage their posts, and engage with others — similar to Medium or Dev.to.


## 🧱 Tech Stack

### 🔗 Frontend
- **Next.js** – Server-side rendering (SSR) and routing
- **React** – UI Components
- **Tailwind CSS / CSS Modules** – Styling
- **Axios / Fetch API** – HTTP requests

### 🔗 Backend
- **Node.js + Express.js** – REST API
- **MongoDB + Mongoose** – NoSQL database
- **JWT (JSON Web Token)** – Authentication
- **Cloudinary / Multer** – Image upload (optional)

---

## 🚀 Features

- 👥 User Authentication (Sign up / Login / JWT-based sessions)
- ✍️ Rich-text blog editor
- 🗂️ User dashboards for blog management
- 🧵 Blog creation, editing, and deletion
- 🔍 Tagging, search, and filtering
- 💬 Commenting system (optional)
- 🖼️ Image upload for blog cover
- 🔒 Secure API routes

---

## 📁 Folder Structure

```plaintext
multi-user-blog/
├── client/ (Next.js)
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── utils/
├── server/ (Express.js)
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── middleware/
├── .env
├── README.md
└── package.json
