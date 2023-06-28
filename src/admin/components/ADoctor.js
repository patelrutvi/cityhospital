import * as React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import * as Yup from 'yup'

export default function ADoctor() {
    const [open, setOpen] = useState(false);


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
                let arr = val.split(" ");
                if (arr.length > 5) {
                    return false;
                } else {
                    return true;
                }
            }),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            dn:'',
            dis:'',
        },
        validationSchema: doctorSchema,
        enableReinitialize: true,
        onsubmit: (values, action) => {
            action.resetForm()
            console.log(values);
        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box height={50} />
            <Button variant="outlined" onClick={() => setOpen(!open)}>
                Open doctor
            </Button>
            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Doctors</DialogTitle>
                <DialogContent >
                    <DialogContentText>

                    </DialogContentText>
                    <form method="post" onSubmit={handleSubmit} >
                        <TextField
                            autoFocus
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
                            autoFocus
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
                            autoFocus
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
                        <div className="social">
                            <a href><i className="ri-twitter-fill" /></a>
                            <a href><i className="ri-facebook-fill" /></a>
                            <a href><i className="ri-instagram-fill" /></a>
                            <a href> <i className="ri-linkedin-box-fill" /></a>
                        </div>
                    </form>
                </DialogContent>


                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}