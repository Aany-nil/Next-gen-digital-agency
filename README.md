# NextGen Digital Agency — Website Developer Intern Assignment

An assignment project built for the **Website Developer Intern** role at **NextBrand IT**. This project is a modern, responsive, and fully functional web application for a digital agency called **NextGen Digital**.

## 🚀 Live Demo & Repositories

- **Live Site:** [https://next-gen-digital-agency-sekt.vercel.app/]
- **GitHub Repository:** [https://github.com/Aany-nil/Next-gen-digital-agency](https://github.com/Aany-nil/Next-gen-digital-agency)

## 🛠️ Tech Stack

### Front-end
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Design:** Figma (Agency Design Canvas)

### Back-end & Database
- **Runtime Environment:** Node.js
- **Framework:** Express.js (`^5.2.1`)
- **Database:** MongoDB (`^7.7.0`) via Mongoose (`^9.10.2`)
- **Utilities:** CORS (`^2.8.6`), dotenv (`^18.0.4`), nodemon (`^3.1.14`)


## ✨ Key Features

- **Responsive Design:** Fully responsive layout optimized for Mobile, Tablet, and Desktop screens.
- **Agency Landing Page:** Modern UI sections including Services, Portfolio, About Us, Testimonials, and Contact.
- **RESTful API:** Express backend handling API routing and controller actions smoothly.
- **Database Connection:** MongoDB Atlas connection managed with robust error handling and environment variables.

## 📁 Complete Project Structure

Next-gen-digital-agency/
├── client/                     # Front-end React Application
│   ├── public/
│   ├── src/
│   │   ├── assets/             # Media and static assets
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Main application pages
│   │   ├── App.jsx             # Main React entry component
│   │   ├── main.jsx            # Application render entry point
│   │   └── index.css           # Global Tailwind directivies
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
└── server/                     # Back-end Express Application
    ├── configaration/          # Database configuration
    │   └── dbConnection.js     # MongoDB connection setup
    ├── routes/                 # Express API routes
    │   └── api.js              # Central route handler
    ├── .env                    # Local environment variables (Git-ignored)
    ├── .env.example            # Environment variables template for deployment
    ├── .gitignore              # Ignored files configuration
    ├── index.js                # Server entry point
    ├── package.json            # Dependencies and scripts
    └── package-lock.json       # Lockfile
