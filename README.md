
# 🎬 Movie & Series Finder

A modern React application to search and discover movies and TV series using the [TMDB API](https://www.themoviedb.org/). Users can search for titles, view details, and get ratings and descriptions in a sleek, responsive interface.

![App Screenshot](https://via.placeholder.com/800x400?text=Add+a+screenshot+here)

## ✨ Features

- 🔍 **Real‑time search** with debounce (500ms) for smooth performance
- 🎞️ **Display results** as cards with poster images
- 📄 **Detailed view** for each movie/series (backdrop, overview, rating, release date)
- ⚡ **Loading & error handling** for a robust user experience
- 🎨 **Responsive design** with modern CSS (gradients, shadows, animations)
- 🧩 **Modular architecture** – components, custom hooks, CSS Modules

## 🛠️ Technologies

- **React** (with Hooks)
- **CSS Modules** for scoped styling
- **TMDB API** (v3)
- **lodash.debounce** for search optimisation
- **ESLint** for code quality

## 📁 Project Structure
 ```bash
tp1/
├── public/
├── src/
│ ├── components/
│ │ ├── Details.jsx
│ │ ├── Details.module.css
│ │ ├── MovieCard.jsx
│ │ ├── MovieCard.module.css
│ │ ├── SearchBar.jsx
│ │ └── SearchBar.module.css
│ ├── hooks/
│ │ ├── useMovies.js
│ │ └── services/
│ │ └── tmdb.js
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
├── .env
├── .gitignore
├── package.json
└── README.md
 ```
text

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A [TMDB API key](https://www.themoviedb.org/documentation/api) (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tp1.git
   cd tp1
   
## Install dependencies
 ```bash
bash
npm install
 ```
Set up environment variables
Create a .env file in the root and add your TMDB API key:
---
text
REACT_APP_TMDB_API_KEY=your_api_key_here
---

Start the development server

bash
npm start
The app will open at http://localhost:3000.

🔧 Usage
Type in the search bar to find movies or series.

Click on any card to see detailed information.

Click the close button (or overlay) to return to the grid.
