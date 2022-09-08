import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Routes/Home'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/Routes/shared/Header'
import ProductDetails from './components/Routes/ProductDetails'
import { useEffect } from 'react'
import { Cart } from './components/Routes/shared/Cart'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  /* Este useEFfect es para hacer el post del usuario a crear */

  /*  useEffect(() => {
     const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
     const obj = {
       firstName: "Bruno",
       lastName: "Gongora",
       email: "brunogongora@gmail.com",
       password: "bruno12345",
       phone: "1234567891",
       role: "admin"
     }
     axios.post(URL, obj)
     .then(res => console.log(res.data))
     .catch(err => console.log(err))
   }, []) */


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
