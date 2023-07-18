import * as React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import * as Yup from 'yup'
import { styled } from 'styled-components';
import Button from '../../../user/components/UI/Button/Button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdoctordata } from '../../../redux/action/doctordata.action';

import { DataGrid } from '@mui/x-data-grid';


export default function ADoctor() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const drdataval = useSelector(state => state.doctor)
    console.log(drdataval, "drdataval");

    // ......redux.....
    useEffect(() => {
        dispatch(getdoctordata())
    }, [])
    // ....................

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let doctorSchema = Yup.object({
        name: Yup.string()
            .required()
            .matches(
                /^[a-zA-Z ]{2,30}$/, 'please enter valid name'
            ),
        dn: Yup.string()
            .required('please enter designation')
            .matches(
                /^[a-zA-Z ]{2,30}$/, 'please enter valid designation'
            ),
        dis: Yup.string()
            .required()
            .test("dis", "Maximum 100 word allow", function (val) {
                console.log(val);
                let arr = val.split(" ");
                if (arr.length > 5) {
                    return false;
                } else {
                    return true;
                }
            }),
        img: Yup.string()
            .required('please add photo')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            dn: '',
            dis: '',
            img: ''
        },
        validationSchema: doctorSchema,
        enableReinitialize: true,
        onsubmit: (values, action) => {
            action.resetForm()
            console.log(values);
        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    //  ......grid data............

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Doctor Name', width: 130 },
        { field: 'Specialization', headerName: 'Specialization', width: 130 },
        { field: 'Degree', headerName: 'Degree', width: 130 },
       
    ];

 

    // ....................

    return (
        <div>
            <Box height={50} />
            <button variant="outlined" onClick={handleClickOpen}>Add Doctor</button>
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Doctors</DialogTitle>
                <DialogContent >
                    <DialogContentText>

                    </DialogContentText>
                    <form method="post" onSubmit={handleSubmit} >
                        <TextField

                            margin="dense"
                            name="name"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.name && touched.name ? errors.name : ''}</span>
                        <TextField

                            margin="dense"
                            name="dn"
                            id="dn"
                            label="Designation"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dn}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.dn && touched.dn ? errors.dn : ''}</span>
                        <TextField

                            margin="dense"
                            name="dis"
                            id="dis"
                            label="Discription"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.dis}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.dis && touched.dis ? errors.dis : ''}</span>
                        {/* <div className="social">
                            <input
                                type='file'
                                name="img"
                                id="img"
                                label="icon"
                                sx={{ margin: '10px', padding: '25px 0 0 0' }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dis}
                            >

                            </input>
                            <span style={{ color: "red" }} className='error'>{errors.img && touched.img ? errors.img : ''}</span>
                        </div> */}
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>



            </Dialog>

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

            {/* {
                drdataval.drData.map((v, i) => {
                    return (
                        <h1>ID:{v.id}</h1>
                    )
                })
            } */}
        </div>
    );
}








