import {BrowserRouter as Router , Routes, Route,Link} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import RegisterUser from './Pages/Register/RegisterUser'
import RegisterRider from './Pages/Register/RegisterRider'
import User from './Pages/User'
import Rider from './Pages/Rider'
import Admin from './Pages/Admin'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register/user' element={<RegisterUser/>}/>
        <Route path='/register/rider' element={<RegisterRider/>}/>
        <Route path='/rider' element={<Rider/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  )
}

export default App
