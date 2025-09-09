//refce, rfc, rafce, rafc 
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Square from './assets/views/Square.jsx';
import Home from "./assets/views/Home.jsx";
import MoneyCal from './assets/views/MoneyCal.jsx';
import BmCal from './assets/views/BmCal.jsx';
import CarCal from './assets/views/CarCal.jsx';
import Notfound from './assets/views/Notfound.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/calculator/square' element={<Square/>}/>
        <Route path='/calculator/money' element={<MoneyCal/>}/>
        <Route path='/calculator/bm' element={<BmCal/>}/>
  <Route path='/calculator/carcal' element={<CarCal/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>         
    </BrowserRouter>
    </>
  )
}

export default App;