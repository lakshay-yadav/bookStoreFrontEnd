import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav (){
    return (
        <nav className="nav nav-borders">
          <NavLink
            className="nav-link active ms-0"
            to=""
          >
            Profile
          </NavLink>
          <NavLink
            className="nav-link"
            to="/profile/change-password"
          >
            Change Password
          </NavLink>
          <NavLink
            className="nav-link"
            to=""
          >
            Order
          </NavLink>
          <NavLink
            className="nav-link"
            to="#"
          >
            Wishlist
          </NavLink>
          <NavLink
            className="nav-link"
            to="#"
          >
            Queries
          </NavLink>
        </nav>
    )
}