import React from 'react';
import cls from './Footer.module.scss'
import {Link} from "react-router-dom";
import {contacts, navList} from "../../Utils";

const Footer = () => {
  return (
    <div className={cls.footer}>
      <ul className={cls.list}>
        <h3>Разделы</h3>
        {
          navList.map(({id, title, func}) => (
            <li key={id}>
              <Link
                to={'/'}
                onClick={() => func()}
              >
                {title}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className={cls.contacts}>
        {
          contacts.map(({id, icon, title}) => (
            <li key={id}>
              {icon}: {title}
            </li>
          ))
        }
      </div>
    </div>
  );
};

export default Footer;
