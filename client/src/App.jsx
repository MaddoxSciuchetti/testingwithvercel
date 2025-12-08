import './App.css'
import Onboarding_Form_Main from './components/Onboarding_Main'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Offboarding_main from "./components/Offboarding_main"
import Offboarding_form from "./components/Offboarding_form"
import Onboarding_form from './components/Onboarding_Form';

function App() {


  return (
    <>
    <header className="main-header">
       <BrowserRouter>

        <nav className="main-nav">
        
          <Link className="links"to="/">Onboarding</Link> | 

          <Link className="links" to="/offboarding">Offboarding</Link>
  
        </nav>

        <Routes>
          <Route path="/" element={<Onboarding_Form_Main/>}></Route>
          <Route path="/offboarding" element={<Offboarding_main/>}/>
          <Route path="/user/:userId" element={<Onboarding_form/>} />
          <Route path="/offboarding/user/:userId" element={<Offboarding_form/>} />
          <Route path="/component" element={<Onboarding_form/>}/>

        </Routes>
      </BrowserRouter>
    </header>      
    </>
  )
}

export default App
