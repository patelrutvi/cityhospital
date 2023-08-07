import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctor, deleteDoctor, getdoctordata, updateDoctor } from '../../../redux/action/doctordata.action';
import { DataGrid } from '@mui/x-data-grid';
import DoctorsForm from './DoctorsForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';


export default function ADoctor() {
    const [updatedata, setupdatedata] = React.useState(null)
    const dispatch = useDispatch()
    const drdataval = useSelector(state => state.doctor)
    console.log(drdataval, "drdataval");

    // ......redux.....
    useEffect(() => {
        dispatch(getdoctordata())
    }, [])
    // ....................

    const handleSubmitdata = (data) => {
        console.log(data, "sjkdnsjk");

        if (updatedata) {
            dispatch(updateDoctor(data))
        } else {
            dispatch(addDoctor(data))
        }
        setupdatedata(null)
    }

    const handledelete = (id) => {
        console.log(id);
        dispatch(deleteDoctor(id))
    }

    const handleEdit = (data) => {
        setupdatedata(data)
    }

    //  ......grid data............

    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Doctor Name', width: 150 },
        { field: 'Designation', headerName: 'Designation', width: 150 },
        { field: 'Degree', headerName: 'Degree', width: 150 },
        { field: 'img', headerName: 'image', width: 150 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,

            renderCell: (params) => (
                <>
                    <DeleteIcon onClick={() => handledelete(params.row.id)}>

                    </DeleteIcon>
                    <EditIcon onClick={() => handleEdit(params.row)}>

                    </EditIcon>
                </>

            ),

        },

    ];

    // ....................

    return (
        <div>
            <Box height={50} />
            {
                drdataval.loding ? <CircularProgress color="secondary" sx={{marginLeft:60}} /> :

                drdataval.error ? 'Somthing went wrong' : 
                    <>
                        <DoctorsForm onhandlesubmit={handleSubmitdata} onupdate={updatedata} />

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
                    </>
            }

        </div>
    );
}








