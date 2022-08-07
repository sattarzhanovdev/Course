import React from 'react';
import cls from './SideBar.module.scss'
import {MdClose} from "react-icons/md";
import {navList} from "../../../Utils";
import {Link} from "react-router-dom";
import {scrollContacts} from "../../../Helpers";

const SideBar = ({sideActive, setSideActive}) => {
  return (
    <div className={sideActive ? cls.sidebarActive : cls.sidebarNone}>
      <div className={cls.close}>
        <li
          onClick={() => setSideActive(false)}
        >
          <MdClose />
        </li>
      </div>
      <div className={cls.logo}>
        <h2>LOGO</h2>
      </div>
      <ul className={cls.list}>
        {
          navList.map(({id, title, func}) => (
            <li
              key={id}
            >
              <Link
                to={''}
                onClick={() => {
                  func()
                  setSideActive(false)
                }}
              >
                {title}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className={cls.contact}>
        <button onClick={() => {
          scrollContacts()
          setSideActive(false)
        }}>
          Связаться с нами
        </button>
      </div>

    </div>
  );
};

export default SideBar;
