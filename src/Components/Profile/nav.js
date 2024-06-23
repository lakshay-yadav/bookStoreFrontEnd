import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav (){
    return (
        <nav className="nav nav-borders">
          <NavLink
            className="nav-link active ms-0"
            to="/profile"
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
            to="/profile/order-history"
          >
            Order
          </NavLink>
          <NavLink
            className="nav-link"
            to="/profile/wishlist"
          >
            Wishlist
          </NavLink>
          <NavLink
            className="nav-link"
            to="/profile/queries"
          >
            Queries
          </NavLink>
        </nav>
    )
}