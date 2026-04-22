import React from 'react'
import { Sidebar } from './Sidebar'
import Navbar from './Navbar'

export const DashboardLayout = ({children}) => {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 bg-light min-vh-100">
        <Navbar />

        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
