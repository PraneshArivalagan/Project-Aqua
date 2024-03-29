import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Loginsignup from './Components/LoginSignup/Loginsignup';
import { Signedpage } from './Components/LoginSignup/Signedpage';
import ComplaintBox from './Components/LoginSignup/ComplaintBox';
import Timings from './Components/LoginSignup/Timings';
import Mapss from './Components/LoginSignup/Mapss';
// import Map_1 from './Components/LoginSignup/Map_1';

// import Home from './Components/chatbox/Home';
// import Chatapp from './Components/LoginSignup/Chatapp';
// import Chatss from './Components/LoginSignup/Chatss';
import Chatapp from './Components/LoginSignup/Chatapp';
import Mapss1 from './Components/LoginSignup/Mapss1';

function App() {
  return (
    <div >
      
   
      <Routes>
         {/* <Route path='/' element={<Loginsignup/>} /> */}
         <Route path='/Signedpage' element={<Signedpage/>} />
        <Route path='/ComplaintBox' element={<ComplaintBox/>} />
        <Route path='/Timings' element={<Timings/>} />  
         <Route path='/Mapss' element={<Mapss/>}/>
         <Route path='/chatapp' element={< Chatapp/>} />

<Route path='/' element={<Mapss1/>}/>


         
              </Routes> 
    </div>
  );
}

export default App;
