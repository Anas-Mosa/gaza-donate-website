
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Hero from './component/Hero'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import WhyGaza from './component/WhyGaza'
import ContactUs from './component/ContactUs'




function App() {

  return (
    
<>
<Header/>

<Routes>
<Route path='/' element={<Hero/>}/>
<Route path='/signIn' element={<SignIn/>}/>
<Route path='/signUp' element={<SignUp/>}/>
<Route path='/' element={<WhyGaza/>}/>
<Route path='/' element={<ContactUs/>}/>

</Routes>
</>
  )
}

export default App
