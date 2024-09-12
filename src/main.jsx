// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { HeaderStateProviderContext } from './Pages/Components/Context.jsx'

createRoot(document.getElementById('root')).render(
    <HeaderStateProviderContext>
        <App />
    </HeaderStateProviderContext>
)
