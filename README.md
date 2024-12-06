## Folder Structure

Below is the folder structure for the **ReactFlix** project:

```plaintext
reactflix/
├── public/                  # Public folder for static assets
│   ├── index.html           # Main HTML file
│   ├── favicon.ico          # Favicon for the app
│   └── Noimage.jpg          # Placeholder image
├── src/                     # Main application folder
│   ├── assets/              # Static assets (images, fonts, etc.)
│   ├── components/          # Reusable React components
│   │   ├── HorizontalCards/ # Horizontal cards component
│   │   ├── Loading.jsx      # Loading spinner component
│   │   └── Navbar.jsx       # Navbar component
│   ├── pages/               # Pages for routing
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   └── Details.jsx      # Details page for movies/shows
│   ├── store/               # Redux store configuration
│   │   ├── actions/         # Redux action creators
│   │   ├── reducers/        # Redux reducers
│   │   └── index.js         # Store setup
│   ├── styles/              # Global and component-specific styles
│   │   └── App.css          # Global CSS
│   ├── utils/               # Utility functions and configurations
│   │   └── axios.js         # Axios setup for API calls
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point for React
│   └── routes.js            # Application routes
├── .gitignore               # Ignored files for Git
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---
