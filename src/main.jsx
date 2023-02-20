import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import pages
import Home from './routes/homePage/Home'
// import Events from './routes/eventsPage/Events'
import Contact from './routes/contactPage/Contact'
// import Contacts from './routes/aboutPage/About'
import ErrorPage from './routes/errorPage/ErrorPage'

// Router config
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contato',
        element: <Contact />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
