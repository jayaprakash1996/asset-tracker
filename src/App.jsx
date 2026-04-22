import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './components/layout/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={
           <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
        } />
   </Routes>
   </BrowserRouter>
  )
}

export default App
