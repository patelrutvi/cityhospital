import React from 'react';
// import { Route } from 'react-rouAMedicineter-dom';
import AMedicine from '../admin/components/AMedicine';
import Panel from '../admin/components/Panel';
import ADoctor from '../admin/components/ADoctor';
import ADrpartment from '../admin/components/ADrpartment';
import AAppoiment from '../admin/components/AAppoiment';
import { Route, Routes } from 'react-router-dom';

function AdminRoutes(props) {
    return (
        <Panel >
            <Routes>
                <Route path='/ADoctor' element={<ADoctor />} />
                <Route path='/ADrpartment' element={<ADrpartment />} />
                <Route path='/AAppoiment' element={<AAppoiment />} />
                <Route path='/AMedicine' element={<AMedicine />} />
            </Routes>
        </Panel>


    );
}

export default AdminRoutes;