# Escovisualz – Cinematic Photography Portfolio

A full‑stack cinematic photography platform built to showcase bold, dramatic, story‑driven visuals.  
This README provides a complete technical and business overview of the project, including setup, architecture, API documentation, deployment workflow, and brand identity.

---

## 🔗 Live Demo  
**https://escovisualz.com**

---

# 📸 Project Vision

Escovisualz is a cinematic photography brand offering bold stories through visuals.  
The platform functions as:
- A **portfolio website** (client‑facing)
- A **content management backend**
- A **scalable MERN architecture** for future expansion (booking system, e‑commerce prints, client galleries, etc.)

Built for performance, SEO, and scalability.

---

# 🧱 Full Tech Stack

### **Frontend**
- React (Vite)
- SCSS (custom styling)
- Mobile‑first responsive design
- Client deployment: **Vercel**

### **Backend**
- Node.js  
- Express  
- MVC structure  
- CORS enabled  
- MongoDB + Mongoose  
- Server deployment: **Render / Heroku**

### **CI/CD**
- GitHub → Vercel (client)  
- GitHub → Render/Heroku (server)

---

# 📂 Project Structure (Detailed)

```
root/
│── client/
│   │── public/
│   │── src/
│   │   │── components/
│   │   │── pages/
│   │   │── styles/
│   │   │── hooks/
│   │   │── utils/
│   │   │── main.jsx
│   │── index.html
│   │── vite.config.js
│
│── server/
│   │── controllers/
│   │── models/
│   │── routes/
│   │── utils/
│   │── server.js
│
│── package.json
│── README.md
│── .gitignore
```

---

# ⚙️ Installation & Setup

### **1. Clone the repo**
```bash
git clone https://github.com/kofiarrhin/escovisualz.git
cd escovisualz
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Create a `.env` file in `/server`**
```
MONGO_URI=your_mongodb_url
PORT=5000
```

### **4. Start development**
```bash
npm run dev
```

This starts both:
- React client (Vite)
- Express backend  
from the root using concurrently.

---

# 🔧 Scripts

### Root-level scripts
```json
{
  "dev": "concurrently "npm run server" "npm run client"",
  "client": "cd client && npm run dev",
  "server": "cd server && nodemon server.js",
  "start": "node server/server.js"
}
```

---

# 🛠 API Documentation (Backend)

### **Base URL:**  
Local: `http://localhost:5000`  
Production: `{your-server-url}`

### **Endpoints**

#### **GET /api/gallery**
Returns all portfolio images.

#### **POST /api/contact**
Sends a message to the backend.

Example:
```json
{
  "name": "John Doe",
  "email": "example@mail.com",
  "message": "Interested in a portrait session."
}
```

---

# 🎨 Brand Identity

### **Tone**
Dark. Cinematic. Bold. Story‑driven.

### **Color Palette**
- Black (#000000 / #0e0e0e)
- Soft white (#f1f1f1)
- Subtle gradients
- High‑contrast imagery

### **Typography**
- Strong bold headers  
- Clean sans‑serif body  

### **Hero Messaging**
“Cinematic Photography for bold stories.”

---

# 📱 Responsive Layout

| Device | Experience |
|--------|------------|
| Mobile | Full‑screen images, vertical scroll flow |
| Tablet | Flexible grid layout |
| Desktop | Wide hero sections, cinematic spacing |

---

# 🚀 Deployment

### **Client (React / Vercel)**
- Push to GitHub → Vercel auto‑deploys

### **Server (Node / Render or Heroku)**
- Deploy via GitHub connect
- MongoDB Atlas for production DB

---

# 🧩 Future Extensions

| Feature | Status |
|--------|---------|
| Booking system | Planned |
| Client galleries | Planned |
| Admin dashboard | Planned |
| Print store | Future |
| Blog + behind‑the‑scenes | Future |

---

# 🤝 Contributing

1. Fork repo  
2. Create new branch  
3. Commit changes  
4. Open PR  

---

# 📝 License  
Open‑source. Free for personal and commercial use.

---

# 📫 Contact

**Website:** https://escovisualz.com  
**Instagram:** @escovisualz  
**Developer:** Kofi | DevKofi  
