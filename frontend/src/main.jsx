import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import App from './App'
import HomeScreen from './pages/homeScreen'
import ProductScreen from './pages/ProductScreen'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' index={true} element={<HomeScreen />} />
          <Route path='/product/:id'  element={<ProductScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
