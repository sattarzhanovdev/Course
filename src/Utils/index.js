import {scrollCourses, scrollHome} from "../Helpers";

export const navList = [
  {id: 1, title: 'Главная', func: scrollHome},
  {id: 2, title: 'Курсы', func: scrollCourses},
  {id: 3, title: 'О нас', func: scrollCourses},
  {id: 4, title: 'Контакты', func: scrollCourses},
]

export const coursesList = [
  {id: 1, title: 'Все курсы', type: 'all'},
  {id: 2, title: 'Разработка', type: 'development'},
]

export const   courses = [
  {id: 1, title: 'Front-end разработка', img: 'https://miro.medium.com/max/1200/1*WA_9JsyqFkge2HwYKcdJQw.png', time: '9 месяцев', format: 'Онлайн', type: 'development'},
  {id: 2, title: 'Back-end разработка', img: 'https://media.zeemly.com/media/product/django.png', time: '9 месяцев', format: 'Онлайн', type: 'development'},
]