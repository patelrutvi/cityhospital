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

function App() {
  return (
   <>
   <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/department' element={<Department />}/>
      <Route path='/doctors' element={<Doctors />}/>
      <Route path='/doctor/:id' element={<Doctor />}/>

      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/appiment' element={<Appoiment />}/>
    </Routes>
   <Footer />
   </>
  );
}

export default App;
