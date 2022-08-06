import React from 'react'
import cls from './Courses.module.scss'
import {courses, coursesList} from "../../Utils";
import { FaLaptopCode } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const Courses = () => {
  const [ filteredBase, setFilteredBase ] = React.useState(null)

  const filterCourses = (typeFromFilter) => {
    console.log(typeFromFilter)
    setFilteredBase(courses.find(item => typeFromFilter == item.type))
  }

  return (
    <div className={cls.courses}>
      <h2>Курсы</h2>
      <div className={cls.courses_list}>
        {
          coursesList.map(({id, title, type}) => (
            <button
              key={id}
              onClick={e => {
                e.preventDefault()
                filterCourses(type)
              }}
            >
              {title}
            </button>
          ))
        }
      </div>
      <div className={cls.courses_cards}>
        {
          filteredBase ? filteredBase  : courses.map(({id, title, img, time, format}) => (
            <div
              className={cls.card}
              key={id}
            >
              <div className={cls.card_img}>
                <img src={img} alt={title} />
              </div>
              <div className={cls.card_body}>
                <li>
                  <span><FaLaptopCode /> </span>: {title}
                </li>
                <li>
                  <span><BiTime /></span> : {time}
                </li>
                <li>
                  <span><IoMdInformationCircleOutline /></span> : {format}
                </li>
              </div>
              <div className={cls.card_footer}>
                <button>
                  Узнать подробнее
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Courses;