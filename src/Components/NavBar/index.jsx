import React from 'react'
import cls from './NavBar.module.scss'
import {Link} from "react-router-dom";
import {navList} from "../../Utils";

const NavBar = () => {
  return (
    <div className={cls.navbar}>
      <div className={cls.logo}>
        <h2>LOGO</h2>
      </div>
      <ul className={cls.list}>
        {
          navList.map(({id, title, func}) => (
            <li
              key={id}
            >
              <Link to={''} onClick={func}>
                {title}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className={cls.contact}>
        <button>
          Связаться с нами
        </button>
      </div>
    </div>
  )
}

export default NavBar;