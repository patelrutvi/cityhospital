import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdoctordata } from '../../../redux/action/doctordata.action';
import { DataGrid } from '@mui/x-data-grid';
import DoctorsForm from './DoctorsForm';


export default function ADoctor() {
   
    const dispatch = useDispatch()
    const drdataval = useSelector(state => state.doctor)
    console.log(drdataval, "drdataval");

    // ......redux.....
    useEffect(() => {
        dispatch(getdoctordata())
    }, [])
    // ....................

    const handleSubmitdata = (data) => {
        console.log(data,"sjkdnsjk");
        dispatch()
      
    }

    //  ......grid data............

    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Doctor Name', width: 150 },
        { field: 'Designation', headerName: 'Designation', width: 150 },
        { field: 'Degree', headerName: 'Degree', width: 150 },
        { field: 'img', headerName: 'image', width: 150 }

    ];

    // ....................

    return (
        <div>
            <Box height={50} />
           <DoctorsForm onhandlesubmit={handleSubmitdata} />

            {/* '''''''grid data..... */}

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={drdataval.drData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection

                />
            </div>

            {/* ...................... */}

           
        </div>
    );
}








