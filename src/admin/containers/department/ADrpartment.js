import React, { useEffect } from 'react';
import DepartmentForm from './DepartmentForm';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartdata, deleteDepartdata, getDepartmentdataa, updatedepartdata } from '../../../redux/action/department.action';
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { addDepartments, deleteDepartments, fetchDepartments, updatedepartments } from '../../../redux/slice/departmentslice';
import { addDepartmentFire, deletedepartmentFire, getdepartmentFire, updatedepartmentFire } from '../../../redux/slice/departmentFireSlice';
// import { fetchDepartments } from '../../../redux/slice/departmentslice';

function ADrpartment(props) {
    const [Update, setUpdate] = React.useState(null);
    const dispatch = useDispatch()
    const depaValue = useSelector(state => state.fdapart)
    console.log(depaValue, "depaValue");
    let dData = depaValue.FdepartData

    useEffect(() => {
        // dispatch(getDepartmentdataa())...axious
        // dispatch(fetchDepartments())....toolkit slice
        dispatch(getdepartmentFire())
    }, [])

    const handleSubmitdata = (data) => {

        console.log("data");
        if(Update){
            // dispatch(updatedepartdata(data))...axious
            // dispatch(updatedepartments(data))....toolkit slice
            dispatch(updatedepartmentFire(data))
        }else{
            // dispatch(addDepartdata(data))...axious
            // dispatch(addDepartments(data))....toolkit slice
            dispatch(addDepartmentFire(data))

        }
        setUpdate(null)
    }

    const handleDelete = (data) => {
        // dispatch(deleteDepartdata(id))...axious
        // dispatch(deleteDepartments(id))....toolkit slice
        dispatch(deletedepartmentFire(data))
    }

    const handleUpdate = (data) => {
       
        setUpdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'Dscription', width: 130 },
        { field: 'pres_name', headerName: 'Image', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            type: 'number',
            width: 90,
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(params.row)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton
                        aria-label="edit"
                        onClick={() => handleUpdate(params.row)}
                    >
                        <EditNoteIcon />
                    </IconButton>

                </>
            )
        }

    ];

    return (
        <div>
            <DepartmentForm onsubmitdata={handleSubmitdata}  onupdate={Update}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={dData}
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

        </div>
    );
}

export default ADrpartment;





