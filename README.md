# Pokepedia

Pokepedia is a web application that allows users to browse and view details of Pokémon using HTML, CSS and JavaScript. It features a user-friendly interface to explore Pokémon stats, types, and related details, powered by a backend API and a MongoDB database.

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
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── app.js              # Main backend application file
│   └── package.json        # Backend dependencies and scripts
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
3. Start the backend server:
   ```bash
   node app.js
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
Deployed in localhost. Attached a video showing the working in pokem.mp4


---
## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

