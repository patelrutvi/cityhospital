import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import { Route, Routes } from 'react-router-dom';
import Department from './containers/Department';
import Doctors from './containers/Doctors';
import About from './containers/About';
import Contact from './containers/Contact';
import Appoiment from './containers/Appoiment';
import Doctor from './containers/Doctor';
import Visitingdoctors from './containers/Visitingdoctors';
import NotFound from './containers/NotFound';
import Auth from './containers/Auth';
import Test2 from './containers/Test2';
import MuiDrower from './containers/MuiDrower';

function App() {
  return (
    // <>
    //   <Header />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/department' element={<Department />} />
    //     <Route path='/doctors' element={<Doctors />} />
    //     {/* <Route path='/doctor/:id' element={<Doctor />}/>
    //   <Route path='/doctor/visiting_doctors' element={<Visitingdoctors />}/> */}

    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/appiment' element={<Appoiment />} />
    //   {/* neseted routs */}
    //     <Route  path='/doctor'>
    //       <Route path=':id' element={<Doctor />} />
    //       <Route path='visiting_doctors' element={<Visitingdoctors />} />
    //     </Route>

    //   <Route path='*' element={<NotFound />}/>
    //   <Route path='/auth' element={<Auth />}/>
    //   </Routes>
    //   <Footer />
    // </>

    <>
      <Test2 />

      {/* <MuiDrower /> */}
    </>
  );
}

export default App;
