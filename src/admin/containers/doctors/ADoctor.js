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
import { styled } from 'styled-components';

export default function ADoctor() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Button = styled.button`
    color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;

  &:hover{
    background-color: #105b72c2;
  }
  `;

    // A new component based on Button, but with some override styles
    const TomatoButton = styled(Button)`
    background-color: tomato;
    color:white;
    border-radius: 40px;
    padding: 9px 36px;
  `;
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

 

    return (
        <div>
            <Box height={50} />
            <TomatoButton variant="outlined" onClick={handleClickOpen}>Add Doctor</TomatoButton>
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
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>



            </Dialog>
        </div>
    );
}