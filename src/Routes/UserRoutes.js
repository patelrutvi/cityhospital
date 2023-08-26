import React, { useState } from 'react';
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
import Counter from '../../src/user/containers/counter/Counter'
import Cart from '../user/containers/cart/Cart';
import MedicineNR from '../user/containers/medicineNTredux/MedicineNR';
import CartNR from '../user/containers/cartNR/CartNR';
import Myfav from '../user/containers/myfav/Myfav';
import CounterFac from '../user/containers/counter/CounterFac';
import UseCallback from '../user/containers/counter/UseCallback';
import Medicinedata from '../user/containers/medicines/Medicinedata';
import UseRefExample from '../user/containers/counter/UseRefExample';




function UserRoutes(props) {
    const [cartcount, setcartcount] = useState(0)
    return (
        <>

            <Header count={cartcount} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/department' element={<Department />} />
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/appiment' element={<Appoiment />} />
                <Route path='/counter' element={<Counter />} />
                {/* .....usememo and usecallback */}
                <Route path='/counterfac' element={<CounterFac />} />
                <Route path='/usecallback' element={<UseCallback />} />
                <Route path='/useref' element={<UseRefExample />} />
                {/* ....................... */}
                <Route path='/cart' element={<Cart />} />
                <Route path='/cartnr' element={<CartNR />} />
                <Route path='/myfav' element={<Myfav />} />
                {/* neseted routes */}
                <Route path='/doctor'>
                    <Route path=':id' element={<Doctor />} />
                    <Route path='visiting_doctors' element={<Visitingdoctors />} />
                </Route>

                <Route path='*' element={<NotFound />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/medicinenr' element={<MedicineNR onupdatecount={setcartcount} />} />

                <Route element={<Protected />}>
                    <Route path='/medicines' element={<Usermedicine />} />
                    <Route path='/medicinedata/:id' element={<Medicinedata />} />
                </Route>

                {/* <Route path='/medicines' element={<Protected Component={Usermedicine} />} /> */}




            </Routes>
            <Footer />

        </>
    );
}

export default UserRoutes;