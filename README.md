# Pokepedia

Pokepedia is a web application that allows users to browse and view details of Pokémon using HTML, CSS and JavaScript. It features a user-friendly interface to explore Pokémon stats, types, and related details, powered by a backend API and a MongoDB database.

# Deployment

## https://pokepedia-website.onrender.com/

# Working Video-Localhost implementation

https://drive.google.com/file/d/1zKJNLgXLtbW1sLa-GX9KO-gl8xYZEpLz/view?usp=sharing

## Features

- **Frontend:** Interactive and responsive UI to display Pokémon data.
- **Backend:** API for fetching Pokémon details and similar Pokémon suggestions.
- **Database:** MongoDB for efficient data storage and retrieval.
- **Sorting & Pagination:** Easily browse Pokémon with sorting and pagination.

---

## Project Structure

```
pokepedia/
│
├── backend/                # Backend code
│   ├── models/Pokemon.js                  # Mongoose models
│   ├── routes/PokemonRoutes.js            # API routes
│   ├── db/seed.js                         # Seeding database from server
│   ├── server.js                          # Main backend application file
│   └── package.json                       # Backend dependencies and scripts
│
├── frontend/               # Frontend code
│   ├── index.html          # Homepage
│   ├── details.html        # Pokémon details page
│   ├── styles/             # CSS styles
│   ├── scripts/            # JavaScript logic
│   └── assets/             # Images, icons, and static files
│
└── README.md               # Project documentation

```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/aishu-0403/pokepedia.git
cd pokepedia
```

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database and start the backend server:
   ```bash
   node db/seed.js
   node server.js
   ```

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Open `index.html` in your browser or use a live server to view the application.

---


## Usage

1. Open the application in a browser.
2. Browse through the list of Pokémon.
3. Click on a Pokémon to view its detailed stats, height, weight, and types.
4. Use the sorting and pagination features for an enhanced browsing experience.

---

## Technologies Used

- **Frontend:**
  - HTML, CSS, JavaScript
- **Backend:**
  - Node.js, Express.js
- **Database:**
  - MongoDB (using Mongoose)

---
## Deployment


---
Deployed backend and frontend using Render.com. Changes in code for deployment is shown in deployment branch.
Backend database is seeded in MongoDB Atlas Cluster.

Main branch is code used to run in localhost. Attached a video showing the working in pokem.mp4


---

