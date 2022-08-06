import React from 'react'
import cls from './NavBar.module.scss'
import {Link} from "react-router-dom";
import {navList} from "../../Utils";
import ContactsSide from "./ContactsSide";
import {FaBars} from "react-icons/fa";

const NavBar = () => {
  const [ active, setActive ] = React.useState(false)

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
        <button onClick={() => setActive(!active)}>
          Связаться с нами
        </button>
      </div>

      <div className={cls.bars}>
        <li>
          <FaBars />
        </li>
      </div>

      <ContactsSide active={active} setActive={setActive} />
    </div>
  )
}

export default NavBar;