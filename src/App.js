import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AddNurses from './components/AddNurses';
import Nurses from './components/Nurses';
import AddTests from './components/AddTests';
import LabTests from './components/LabTests';
import Profile from './components/Profile';
import MyBookings from './components/MyBookings';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route path='/' element = {<MainContent/>} ></Route>
        <Route path='/signin' element={<Signin />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/profile' element={<Profile />} ></Route>
        <Route path='/addnurses' element={<AddNurses />} ></Route>
        <Route path='/viewnurses' element={<Nurses />} ></Route>
        <Route path='/addtests' element={<AddTests />} ></Route>
        <Route path='/viewtests' element={<LabTests />} ></Route>
        <Route path='/mybookings' element={<MyBookings />} ></Route>
    </Routes>  

    </div>
  </Router>
  );
}

export default App;
