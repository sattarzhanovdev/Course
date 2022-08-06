import React from 'react';
import cls from './Application.module.scss'
import {getConsutation} from "../../Configs";

const Application = () => {
  const [ active, setActive ] = React.useState(false)
  const [ active1, setActive1 ] = React.useState(false)
  const [ active2, setActive2 ] = React.useState(false)

  const [ name, setName ] = React.useState('')
  const [ number, setNumber ] = React.useState('')
  const [ email, setEmail ] = React.useState('')

  const [ error, setError ] = React.useState('')
  return (
    <div className={cls.application}>
      <h2>
        Подать заявку на консультацию
      </h2>
      <div className={cls.send_application}>
        <div>
          <input
            type="text"
            placeholder={'Имя*'}
            className={active ? cls.activeInput : ''}
            onClick={() => {
              setActive(true)
              setActive1(false)
              setActive2(false)
            }}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={'Номер телефона*'}
            className={active1 ? cls.activeInput : ''}
            onClick={() => {
              setActive(false)
              setActive1(true)
              setActive2(false)
            }}
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder={'E-mail*'}
            className={active2 ? cls.activeInput : ''}
            onClick={() => {
              setActive(false)
              setActive1(false)
              setActive2(true)
            }}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setActive(false)
              setActive1(false)
              setActive2(false)
              if(name < 1){
                setError('Заполните поля*')
              }else if(number < 1){
                setError('Заполните поля*')
              }else if(email < 1){
                setError('Заполните поля*')
              }else{
                getConsutation({name: name, phoneNumber: number, email: email})
                setError('')
              }
            }}
          >
            Отправить заявку
          </button>
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Application;
