import React from 'react';
import cls from './Contacts.module.scss'
import {MdClose} from "react-icons/md";

const ContactsSide = ({active, setActive}) => {
  return (
    <div className={active ? cls.sideActive : cls.contacts_side}>
      <li onClick={() => setActive(false)}>
        <MdClose />
      </li>
      <div className={cls.contacts}>
        <p>Позвоните нам: +996 222 121 217</p>
        <p>Или</p>
        <p>Напишите нам (Whatsapp) на этот же номер</p>
      </div>
    </div>
  );
};

export default ContactsSide;
