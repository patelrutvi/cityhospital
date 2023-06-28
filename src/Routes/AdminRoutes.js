import React from 'react';
import { Route } from 'react-router-dom';
import AMedicine from '../admin/components/AMedicine';
import Panel from '../admin/components/Panel';
import ADoctor from '../admin/components/ADoctor';
import ADrpartment from '../admin/components/ADrpartment';
import AAppoiment from '../admin/components/AAppoiment';

function AdminRoutes(props) {
    return (
        <Panel >
            <Route>
            <Route path='/adoctor' element={<ADoctor />} />
            <Route path='/adepartment' element={<ADrpartment />} />
            <Route path='/aapoinment' element={<AAppoiment />} />

                <Route path='/amedicine' element={<AMedicine />} />

            </Route>
        </Panel>


    );
}

export default AdminRoutes;