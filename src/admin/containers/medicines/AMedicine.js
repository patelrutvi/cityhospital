import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';

import { json } from 'react-router-dom';

// .....table...
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
import Medicineform from './Medicineform';


//........

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

//   .....dialog...

export default function AMedicine() {
    const [open, setOpen] = useState(false);
    const [medicine, setmedicine] = useState([]);
    const [updatedata, setupdatedata] = useState(null)

    useEffect(() => {
        let medicine = JSON.parse(localStorage.getItem('medicine'));
        // console.log(medicine,"getmedicine");  
        if (medicine !== null) {
            setmedicine(medicine);
        }
    }, []);


    const handleSubmitdata = (data) => {
        console.log(data);
    

        let getlocaldata = JSON.parse(localStorage.getItem("medicine"))
        console.log(getlocaldata);
        let rno = Math.floor(Math.random() * 1000)

        let newdata = { id: rno, ...data }

        if (getlocaldata === null) {
            localStorage.setItem("medicine", JSON.stringify([newdata]))
            setmedicine([newdata])
        } else {
            if (updatedata) {
                let udata = getlocaldata.map((v) => {
                    if (v.id === data.id) {
                        return data
                    } else {
                        return v
                    }
                })
                console.log(udata);
                localStorage.setItem("medicine", JSON.stringify(udata))
                setmedicine(udata)
            } else {
                getlocaldata.push(newdata)
                console.log(getlocaldata);
                localStorage.setItem("medicine", JSON.stringify(getlocaldata))
                setmedicine(getlocaldata)
            }

        }
        setupdatedata(null)

    }
    const handledelete = (i) => {
        console.log("delete", i);

        let mgetlocaldata = JSON.parse(localStorage.getItem("medicine"))
        // console.log(mgetlocaldata);

        let fdata = mgetlocaldata.filter((v, index) => v.id !== i)
        setmedicine(fdata)
        localStorage.setItem("medicine", JSON.stringify(fdata))

    }

    // const handleEdit = (evalue) => {
    //     //    console.log(evalue);
    //     formik.setValues(evalue)
    //     handleClickOpen()
    //     formik.setValues(evalue)
    //     setupdatedata(evalue)
    // }

    // var d = new Date();
    // let nd = new Date(d.setDate(d.getDate()-1))
    // ..present date mathi -1




    // console.log(errors);

    // ....Grid table..../
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'mname', headerName: 'Medicine Name', width: 130 },
        { field: 'expdate', headerName: 'Exp Date', width: 130 },
        { field: 'mprice', headerName: 'Price', width: 130 },
        { field: 'mdisc', headerName: 'Description', width: 160 },
        {
            field: 'action',
            headerName: 'Remove',
            width: 130,

            renderCell: (params) => (
                <DeleteIcon onClick={() => handledelete(params.row.id)}>

                </DeleteIcon>

            ),

        },
        // {
        //     field: 'edit',
        //     headerName: 'Edit',
        //     width: 130,
        //     renderCell: (params) => (
        //         <EditIcon onClick={() => handleEdit(params.row)}>

        //         </EditIcon>
        //     )

        // },

    ];


    return (
        <div>
            <Box height={40} />

       <Medicineform />

            {/* .......table... */}
            {/* 
            <TableContainer component={Paper} sx={{ marginTop: '20px' }} >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Medicine Name</StyledTableCell>
                            <StyledTableCell align="center">Exp Date</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Delete</StyledTableCell>
                            <StyledTableCell align="center">Edit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {medicine.map((row) => (
                            <StyledTableRow id='medirem' key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.mname}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.expdate}</StyledTableCell>
                                <StyledTableCell align="center">{row.mprice}</StyledTableCell>
                                <StyledTableCell align="center">{row.mdisc}</StyledTableCell>
                                <StyledTableCell align="center"><DeleteIcon onClick={() => handleDelete(row.id)} /></StyledTableCell>
                                <StyledTableCell align="center"><EditIcon /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}


            {/* ....gid table */}

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medicine}
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