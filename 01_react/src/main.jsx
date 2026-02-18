import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    //App() //this also allowed
    <App/>  //this is jsx syntax, this is also allowed

)
