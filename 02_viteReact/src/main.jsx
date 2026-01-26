import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// in react we store all this in a variable but here vite is doing it directly and performing render on it
createRoot(document.getElementById('root')).render(
    <App />
)