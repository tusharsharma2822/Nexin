import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Start from '../screens/Start'


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Start />} />
        <Route path='/home' element={ <Home />}/>
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes