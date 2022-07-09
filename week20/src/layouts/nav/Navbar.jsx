import React from 'react'
import { Link } from 'react-router-dom'
import css from './Navbar.module.css';


export default function Navbar() {

  console.log({ css });

  const navItems = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Contact',
      link: '/contact',
    },
    {
      title: 'Login',
      link: '/login',
    }
  ]

  return (
    <ul className={css.navbar} >
      {navItems.map((item) => (
        <li key={item.title} >
          <Link to={item.link}>
            {item.title}
          </Link>
        </li>
      ))}

    </ul>

  )
}
