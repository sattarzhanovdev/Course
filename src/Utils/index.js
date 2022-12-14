import {scrollAboutUs, scrollContacts, scrollCourses, scrollHome} from "../Helpers";
import {FaEnvelope, FaTelegram, FaWhatsapp} from 'react-icons/fa'

export const navList = [
  {id: 1, title: 'Главная', func: scrollHome},
  {id: 2, title: 'Курсы', func: scrollCourses},
  {id: 3, title: 'О нас', func: scrollAboutUs},
  {id: 4, title: 'Контакты', func: scrollContacts},
]

export const coursesList = [
  {id: 1, title: 'Все курсы', typeOfCourse: 'all'},
  {id: 2, title: 'Разработка', typeOfCourse: 'development'},
]

export const courses = [
  {id: 1, title: 'Front-end разработка', img: 'https://miro.medium.com/max/1200/1*WA_9JsyqFkge2HwYKcdJQw.png', time: '9 месяцев', format: 'Онлайн', typeOfCourse: 'development'},
  {id: 2, title: 'Back-end разработка', img: 'https://media.zeemly.com/media/product/django.png', time: '9 месяцев', format: 'Онлайн', typeOfCourse: 'development'},
]

export const contacts = [
  {id: 1, icon: <FaWhatsapp />, title: '+996 222 121 217'},
  {id: 2, icon: <FaTelegram />, title: '+996 222 121 217'},
  {id: 3, icon: <FaEnvelope />, title: 'sattarzhanovdev@gmail.com'}
]