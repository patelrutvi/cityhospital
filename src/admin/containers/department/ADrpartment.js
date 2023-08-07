import React from 'react';
import Box from '@mui/material/Box';
import DepartmentForm from './DepartmentForm';
import { DataGrid } from '@mui/x-data-grid';

import { useDispatch, useSelector } from 'react-redux';

import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { addDepartments, deleteDepartments, fetchDepartments, updatedepartments } from '../../../redux/slice/departmentslice';
import { addData, deleteData, getdepartment, updateData } from '../../../redux/action/department.action';


function ADrpartment(props) {

    const [update, setUpdate] = React.useState(null);

    const dispatch = useDispatch()
    const departD = useSelector(state => state.department)


    console.log(departD, 'department');

    React.useEffect(() => {

        dispatch(getdepartment())
        // dispatch(fetchDepartments())


    }, [])

    const handleSubmit = (data) => {
        console.log(data)


        if (update) {
            dispatch(updateData(data))
            //   dispatch(updatedepartments(data))
        } else {
            dispatch(addData(data))
            //   dispatch(addDepartments(data))
        }

        setUpdate(null)

    }

    const handleDelete = (id) => {
        dispatch(deleteData(id))
        // dispatch(deleteDepartments(id))
    }

    const handleUpdate = (data) => {
        // dispatch(updateData(data))
        setUpdate(data)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'Description', width: 130 },
        {
            field: "action",
            headerName: "Actoin",
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
            ),
            width: 130,
        },
    ];

    return (
        <>
            <>
                {/* <DepartmentForm onhandleSubmit={handleSubmit} onUpdate={update} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={departD.depart}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div> */}

            </>

            {
                departD.isloading ? <Box sx={{ display: 'flex', width: '200px ' }}>
                    <CircularProgress />
                </Box>
                    :
                    departD.error ? departD.error :
                        <>
                            <DepartmentForm onhandleSubmit={handleSubmit} onUpdate={update} />
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={departD.depart}
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

                        </>
            }


        </>
    );
}

export default ADrpartment;