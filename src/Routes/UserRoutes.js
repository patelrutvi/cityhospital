import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../user/components/Header'
import Footer from '../user/components/Footer'
import Home from '../user/containers/Home';
import Department from '../user/containers/Department';
import Doctors from '../user/containers/Doctors';
import About from '../user/containers/About';
import Contact from '../user/containers/Contact';
import Appoiment from '../user/containers/Appoiment';
import Doctor from '../user/containers/Doctor';
import Visitingdoctors from '../user/containers/Visitingdoctors';
import NotFound from '../user/containers/NotFound';
import Auth from '../user/containers/Auth';
import Usermedicine from '../user/containers/medicines/Usermedicine';
import Protected from './Protected';



function UserRoutes(props) {
    return (
        <>

            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/department' element={<Department />} />
                <Route path='/doctors' element={<Doctors />} />

                {/* ..... */}
               
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/appiment' element={<Appoiment />} />
                {/* neseted routs */}

                <Route path='/doctor'>
                    <Route path=':id' element={<Doctor />} />
                    <Route path='visiting_doctors' element={<Visitingdoctors />} />
                </Route>

                <Route path='*' element={<NotFound />} />
                <Route path='/auth' element={<Auth />} />
                {/* <Route path='/medicines' element={<Usermedicine />} /> */}

                <Route path='/medicines' element={<Protected Component={Usermedicine} />} />
           



            </Routes>
            <Footer />

        </>
    );
}

export default UserRoutes;