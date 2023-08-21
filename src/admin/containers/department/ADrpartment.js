import React, { useEffect } from 'react';
import DepartmentForm from './DepartmentForm';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartdata, deleteDepartdata, getDepartmentdataa, updatedepartdata } from '../../../redux/action/department.action';
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { addDepartments, deleteDepartments, fetchDepartments, updatedepartments } from '../../../redux/slice/departmentslice';
// import { fetchDepartments } from '../../../redux/slice/departmentslice';

function ADrpartment(props) {
    const [Update, setUpdate] = React.useState(null);
    const dispatch = useDispatch()

    const depaValue = useSelector(state => state.department)
    console.log(depaValue, "depaValue");
    let dData = depaValue.depart

    useEffect(() => {
        // dispatch(getDepartmentdataa())
        dispatch(fetchDepartments())
    }, [])

    const handleSubmitdata = (data) => {

        console.log("data");
        if(Update){
            // dispatch(updatedepartdata(data))
            dispatch(updatedepartments(data))
        }else{
            // dispatch(addDepartdata(data))
            dispatch(addDepartments(data))

        }
        setUpdate(null)
    }

    const handleDelete = (id) => {
        // dispatch(deleteDepartdata(id))
        dispatch(deleteDepartments(id))
    }

    const handleUpdate = (data) => {
       
        setUpdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'Dscription', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            type: 'number',
            width: 90,
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(params.row.id)}
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





