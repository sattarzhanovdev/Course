import React from 'react'
import cls from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={cls.banner}>
      <div className={cls.left}>
        <h1>
          Успей освоить <br/>
          востребованную <span>IT-профессию</span>
        </h1>
        <div className={cls.buttons}>
          <button>
            Получить консультацию
          </button>
        </div>
      </div>
      <div className={cls.right}>
        <img src="https://www.codifylab.com/assets/images/home/homePageGif.gif" alt=""/>
      </div>
    </div>
  )
}

export default Banner;