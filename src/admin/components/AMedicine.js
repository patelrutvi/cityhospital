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

export default function AMedicine() {
    const [open, setOpen] = useState(false);

    let medicineSchema = Yup.object({
        mname: Yup.string()
            .required()
            .matches(
                /^[a-zA-Z ]{2,30}$/, 'please enter valid name'
            ),
        expdate: Yup.date()
            .required("please enter EXp date")
            .min(new Date(), 'Must be in present and past'),
        mprice: Yup.string()
        .required()
        .matches(/^\d+(?:[.,]\d+)*$/,'please enter  price'),
       
        mdisc: Yup.string()
            .required()
            .test("mdisc", "Maximum 100 word allow", function (val) {
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
            expdate: '',
            mprice: '',
            mdisc: '',

        },
        validationSchema: medicineSchema,
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

            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <form method="post" onSubmit={handleSubmit} >

                        <TextField
                            autoFocus
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
                            autoFocus
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
                            autoFocus
                            margin="dense"
                            name="mprice"
                            id="mprice"
                            label="Price"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mprice}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.mprice && touched.mprice ? errors.mprice : ''}</span>

                        <TextField
                            autoFocus
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