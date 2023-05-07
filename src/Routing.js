import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Details from './Details/Details'
import { Provider, useSelector } from 'react-redux'
import { store } from './Redux/store'

function Routing() {
  const state=useSelector(({data})=>data);
  console.log("state",state)
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Details" element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
  )
};
const stateProvider=()=>{
  return(
    <Provider store={store}>
      <Routing/>
    </Provider>
  )
};

export default stateProvider