import React from 'react';
// import { Route } from 'react-rouAMedicineter-dom';
import AMedicine from '../admin/containers/medicines/AMedicine';
import Panel from '../admin/components/Panel';
import AAppoiment from '../admin/components/AAppoiment';
import { Route, Routes } from 'react-router-dom';
import DashBoard from '../admin/containers/DashBoard';
import ADoctor from '../admin/containers/doctors/ADoctor';
import ADrpartment from '../admin/containers/department/ADrpartment';

function AdminRoutes(props) {
    return (
            <Panel >
                <Routes>
                    <Route  path='/' element={<DashBoard />}/>
                    <Route path='/ADoctor' element={<ADoctor />} />
                    <Route path='/ADrpartment' element={<ADrpartment />} />
                    <Route path='/AAppoiment' element={<AAppoiment />} />
                    <Route path='/AMedicine' element={<AMedicine />} />
                </Routes>
            </Panel>
    );
}

export default AdminRoutes;