import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Hero from './component/Hero'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import WhyGaza from './component/WhyGaza'
import ContactUs from './component/ContactUs'
import WhoAreYou from "./component/whoAreYou"



function App() {

  return (
    
<>
<Header/>

<Routes>
<Route path='/' element={<Hero/>}/>
<Route path='/WhoAreYou' element={<WhoAreYou/>}/>
<Route path='/SignIn' element={<SignIn/>}/>
<Route path='/WhyGaza' element={<WhyGaza/>}/>
<Route path='/contactUs' element={<ContactUs/>}/>
<Route path='/SignUp' element={<SignUp/>}/>




</Routes>
</>
  )
}

export default App
