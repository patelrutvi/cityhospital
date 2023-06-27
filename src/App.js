import logo from './logo.svg';
import './App.css';
import Header from './user/components/Header';
import Footer from './user/components/Footer';
import Home from './user/containers/Home';
import { Route, Routes } from 'react-router-dom';
import Department from './user/containers/Department';
import Doctors from './user/containers/Doctors';
import About from './user/containers/About';
import Contact from './user/containers/Contact';
import Appoiment from './user/containers/Appoiment';
import Doctor from './user/containers/Doctor';
import Visitingdoctors from './user/containers/Visitingdoctors';
import NotFound from './user/containers/NotFound';
import Auth from './user/containers/Auth';
import Test2 from './user/containers/Test2';
import MuiDrower from './user/containers/MuiDrower';
import Panel from './admin/components/Panel'
import ADoctor from './admin/components/ADoctor'
import ADrpartment from './admin/components/ADrpartment'

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<Home />} />
        <Route path='/department' element={<Department />} />
        <Route path='/doctors' element={<Doctors />} /> */}
        {/* { <Route path='/doctor/:id' element={<Doctor />}/>
      <Route path='/doctor/visiting_doctors' element={<Visitingdoctors />}/> } */}

       {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appiment' element={<Appoiment />} /> */}
      {/* neseted routs */}
      {/* <Route  path='/doctor'>
          <Route path=':id' element={<Doctor />} />
          <Route path='visiting_doctors' element={<Visitingdoctors />} />
        </Route>

       <Route path='*' element={<NotFound />}/>
       <Route path='/auth' element={<Auth />}/>
      </Routes>
      <Footer /> */}
      {/* <Test2 /> */}
      {/* <MuiDrower /> */}
      <Panel />

      {/* <ADoctor />
      <ADrpartment /> */}
    
    </>

  );
}

export default App;
