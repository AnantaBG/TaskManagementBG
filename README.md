## 📌 Overview  
This is a **Task Management Application** where users can add, edit, delete, and reorder tasks using a **drag-and-drop** interface. Tasks are categorized into **To-Do, In Progress, and Done** sections, ensuring an organized workflow. The app provides **real-time updates** and maintains data persistence through a **MongoDB database**.  

Users must authenticate via **Firebase Authentication (Google Sign-In)** to access the application. The app features a **modern, minimalistic UI** and is **fully responsive** for both desktop and mobile users.  

## 🚀 Live Demo  
🔗 **Frontend:** [https://taskman-er.web.app/](#)  
🔗 **Backend:** [https://task-management-server-iota-rose.vercel.app/](#)  

---

## 📂 Table of Contents  
- [Features](#-features)  
- [Technologies Used](#-technologies-used)  
- [Installation](#-installation)  
- [API Endpoints](#-api-endpoints)  
- [Project Structure](#-project-structure)  
- [Usage](#-usage)  
- [Bonus Features](#-bonus-features)  
- [Contributing](#-contributing)  
- [License](#-license)  

---

## ✨ Features  
✔ **User Authentication** via Firebase (Google Sign-In)  
✔ **Task CRUD Operations** (Create, Read, Update, Delete)  
✔ **Drag-and-Drop Task Reordering**  
✔ **Real-time Updates & Persistence** (MongoDB + Express.js API)  
✔ **Optimistic UI Updates** (Frontend updates before server confirmation)  
✔ **Fully Responsive UI** (Desktop & Mobile)  
✔ **Dark Mode** (Optional)  
✔ **Task Due Dates with Color Indicators** (Overdue tasks turn red)  

---

## 🛠 Technologies Used  

### **Frontend:**  
- **React.js (Vite.js)** – UI Framework  
- **Firebase Authentication** – User Authentication   
- **Tailwind CSS / Styled Components** – UI Styling  
- **Axios** – API Requests  

### **Backend:**  
- **Node.js + Express.js** – Backend Framework  
- **MongoDB + Mongoose** – Database & ORM  
- **Firebase Admin SDK** – User Verification  
- **CORS & Helmet** – Security Middleware  
- **Dotenv** – Environment Variables  

---

## 🛠 Installation  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/AnantaBG/TaskManagementBG
cd task-manager