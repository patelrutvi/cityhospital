import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { styled } from 'styled-components';
import Button from '../../../user/components/UI/Button/Button';
import { useState } from 'react';


function DoctorsForm({ onhandlesubmit }) {
    const [open, setOpen] = useState(false);
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
        Designation: Yup.string()
            .required('please enter designation')
            .matches(
                /^[a-zA-Z ]{2,30}$/, 'please enter valid designation'
            ),
        Degree: Yup.string()
            .required()
            .test("Degree", "Maximum 4 word allow", function (val) {
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
            Designation: '',
            Degree: '',
            img: ''
        },
        validationSchema: doctorSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            console.log(values);
            handleClose()
            onhandlesubmit(values)
        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    return (
        <div>
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
                            name="Designation"
                            id="Designation"
                            label="Designation"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Designation}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.Designation && touched.Designation ? errors.Designation : ''}</span>
                        <TextField

                            margin="dense"
                            name="Degree"
                            id="Degree"
                            label="Degree"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Degree}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.Degree && touched.Degree ? errors.Degree : ''}</span>
                        <div className="social">
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
                        </div>
                        <DialogActions>
                            <button onClick={handleClose}>Cancel</button>
                            <button type='submit'>Submit</button>
                        </DialogActions>
                    </form>
                </DialogContent>



            </Dialog>
        </div>
    );
}

export default DoctorsForm;