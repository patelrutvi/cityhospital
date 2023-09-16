import React, { useEffect } from 'react';
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


function DoctorsForm({ onhandlesubmit, onupdate }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (onupdate) {
            handleClickOpen()
            formik.setValues(onupdate)
        }
    }, [onupdate])
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
        pres: Yup.string()
            .required('please add photo')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            Designation: '',
            Degree: '',
            pres: ''
        },
        validationSchema: doctorSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            console.log(values);
            handleClose()
            onhandlesubmit(values)
        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur, setFieldValue } = formik

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


                        <div className='col-md-4 form-group mt-3' style={{ display: 'flex' }}>
                            <input type="file"
                                name="pres"

                                onChange={(event) => setFieldValue("pres", event.target.files[0])}

                            />
                            {
                                values.pres === '' ? '' : <img src={typeof values.pres === 'string' ? values.pres : URL.createObjectURL(values.pres)} style={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                            }

                            <span style={{ color: 'red' }} className='error'>{errors.pres && touched.pres ? errors.pres : null}</span>
                            <div className="validate" />
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