import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Screens/Dashboard'
import Login from '../Screens/Login'
import Signin from '../Screens/Signin'
import BATreeView from '../Components/batreeview'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/*' element={<Dashboard/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
