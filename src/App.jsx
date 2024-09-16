import React from "react";
import "./App.css";
import TheoryTest from "./components/TheoryTest";
import About from "./components/About";
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import SpeedAwareness from "./components/SpeedAwareness";
import Privacy from "./components/Privacy";
import Cost from "./components/Cost";
import Duration from "./components/Duration";
import Timing from "./components/Timing";
import Refund from './components/Refund'
import Terms from './components/Terms'
import Assessment from "./components/Assessment";
import ContactUs from "./components/ContactUs";


function App() {;
  return (
    <><BrowserRouter> 
    <div className="bigmaincontainer" tabIndex={0}>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Speed_Awareness" element={<SpeedAwareness/>}/>
          <Route path="/TheoryTest" element={<TheoryTest/>}/>
          <Route path="/Privacy&Policy" element={<Privacy/>}/>
          <Route path="/cost" element={<Cost/>}/>
          <Route path="/duration" element={<Duration/>}/>
          <Route path="/refund-policy" element={<Refund/>}/>
          <Route path="/Terms-condition" element={<Terms/>}/>
          <Route path="/timing" element={<Timing/>}/>
          <Route path="/contact-Us" element={<ContactUs/>}/>
          {/* <Route path="/age" element={<Cost/>}/> */}
          <Route path="/assessment" element={<Assessment/>}/>
          {/* <Route path="/results" element={<Cost/>}/> */}
        </Routes>

    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
