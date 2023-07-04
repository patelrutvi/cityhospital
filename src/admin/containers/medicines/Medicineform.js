import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';

function Medicineform(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let medicineSchema = Yup.object({
        mname: Yup.string()
            .required(),
        expdate: Yup.date()
            .required("please enter EXp date")
            .min(new Date(), 'Must be in present and past'),
        mprice: Yup.number()
            .required()
            .typeError('please enter valid price'),

        mdisc: Yup.string()
            .required()
            .test("mdisc", "Maximum 100 word allow", function (val) {
                let arr = val.split(" ");
                if (arr.length > 100) {
                    return false;
                } else {
                    return true;
                }
            }),
    })

    const formik = useFormik({
        initialValues: {
            mname: '',
            expdate: '',
            mprice: '',
            mdisc: '',

        },
        validationSchema: medicineSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            handleClose()
            // console.log(values);
            // handleSubmitdata(values)


        }
    })
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

 
    return (
        <>
                 <Button variant="outlined" onClick={handleClickOpen}>
                Open Medicine
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine</DialogTitle>
                <DialogContent>
                    <form method="post" onSubmit={handleSubmit} >
                        <TextField
                            margin="dense"
                            name="mname"
                            id="mname"
                            label="Medicine Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mname}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.mname && touched.mname ? errors.mname : ''}</span>
                        <TextField

                            margin="dense"
                            name="expdate"
                            id="expdate"
                            label="Exp Date"
                            type="date"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.expdate}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.expdate && touched.expdate ? errors.expdate : ''}</span>
                        <TextField

                            margin="dense"
                            name="mprice"
                            id="mprice"
                            label="Price"
                            type="number"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mprice}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.mprice && touched.mprice ? errors.mprice : ''}</span>

                        <TextField

                            margin="dense"
                            name="mdisc"
                            id="mdisc"
                            label="Discription"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mdisc}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.mdisc && touched.mdisc ? errors.mdisc : ''}</span>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Medicineform;