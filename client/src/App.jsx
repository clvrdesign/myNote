import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Error from './pages/Error/Error'

const routes = (
  <BrowserRouter>
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/*' exact element={<Error />} />
      </Routes>
    
  </BrowserRouter>

)

function App() {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App