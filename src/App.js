import React from 'react'
import NavBar from "./Components/NavBar";
import './App.css'
import Banner from "./Components/Banner";
import axios from 'axios'
import Courses from "./Components/Courses";
import Application from "./Components/Applicaton";
import * as firebase from 'firebase/app';

axios.defaults.baseURL = 'https://6252f38569af39728b5517f3.mockapi.io/api/v1'

const App = () => {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>

      <main>
        <Banner />
        <Courses />
        <Application />
      </main>
    </React.Fragment>
  )
}

export default App;