import React from 'react'
import cls from './Banner.module.scss'
import {scrollGetConsultation} from "../../Helpers";

const Banner = () => {
  return (
    <div className={cls.banner}>
      <div className={cls.left}>
        <h1>
          Успей освоить <br/>
          востребованную <p>IT-профессию.</p>
        </h1>
        <div className={cls.buttons}>
          <button onClick={() => scrollGetConsultation()}>
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