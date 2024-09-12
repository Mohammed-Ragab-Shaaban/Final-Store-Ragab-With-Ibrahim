import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Header from './Pages/Components/Header/Header'
import { HeaderStateContext, HeaderStateProviderContext } from './Pages/Components/Context'
import EveryThing from './Pages/EveryThing/EveryThing'
import SingleProduct from './Pages/Components/SingleGroceries'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import BuyPage from './Pages/Components/BuyPage'
import Groceries from './Pages/Groceries/Groceries'
import Juice from './Pages/Juice/Juice'
import SingleGroceries from './Pages/Components/SingleGroceries'
import SingleJuices from './Pages/Components/SingleJuices'

export default function App() {
  const {showSingleProduct, setShowSingleProduct} = useContext(HeaderStateContext);
  return (
    <div>
      <BrowserRouter>
                
                  <Header />
                
          <Routes>
            <Route path='/'>
              <Route index element={<HomePage />}></Route>

            <Route path='/everything' >
              <Route index element={<EveryThing />}></Route>
              <Route path=':id' element={ showSingleProduct == "Groceries"? <SingleGroceries /> : <SingleJuices />}></Route>
            </Route>

            <Route path='/groceries'>
              <Route index element={<Groceries />}></Route>
              <Route path=':id' element={<SingleGroceries />}></Route>
            </Route>
            
            <Route path='/juice'>
              <Route index element={<Juice />}></Route>
              <Route path=':id' element={<SingleJuices />}></Route>
            </Route>

            <Route path='/about' element={<h1>About</h1>}></Route>
            <Route path='/contact' element={<h1>Contact</h1>}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/buyPage' element={<BuyPage />}></Route>
            <Route path='*' element={<h1>404 Page</h1>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
