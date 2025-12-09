import './App.css'
import Onboarding_Form_Main from './components/Onboarding_Main'
import {Routes, Route} from 'react-router-dom';
import Offboarding_main from "./components/Offboarding_main"
import Offboarding_form from "./components/Offboarding_form"
import Onboarding_form from './components/Onboarding_Form';
import { Navbar } from './components/Navbar';

function App() {


  // Improve routing with react router


  return (
    <>
    <div className="main-header">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Onboarding_Form_Main/>}></Route>
        <Route path="/offboarding" element={<Offboarding_main/>}/>
        <Route path="/user/:userId" element={<Onboarding_form/>} />
        <Route path="/offboarding/user/:userId" element={<Offboarding_form/>} />
        <Route path="/component" element={<Onboarding_form/>}/>
      </Routes>
      
    </div>      
    </>
  )
}

export default App
