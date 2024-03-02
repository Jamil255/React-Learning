import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './app.module.css'

function Navbar() {
  return (
    <>
      <ul className="d-flex gap-5 w-100 bg-dark mt-4 p-4 list ps-5">
        <li gap-5>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.normalLink
            }
          >
            Home
          </NavLink>
        </li>
        <li></li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.normalLink
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/page"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.normalLink
            }
          >
            Page
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Navbar
