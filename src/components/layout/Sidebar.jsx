import React from 'react'
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    const menuItems=[
        {name:"Dashboard", path:"/dashboard"},
        {name:"Assets", path:"/assets"},
        {name:"Employees", path:"/employees"},
    ];
  return (
    <div>
        <h4>Asset Manager</h4>
        {
            menuItems.map((item)=>{
              return(
                  <NavLink key={item.name} to={item.path} className="d-block text-decoration-none mb-3">
                    {item.name}
                </NavLink>
              )
            })
        }
    </div>
  )
}
