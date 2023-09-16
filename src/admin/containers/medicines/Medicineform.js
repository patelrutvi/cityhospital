import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { styled } from 'styled-components';


function Medicineform({ onhandlesubmit, onupdate }) {
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

    // var d = new Date();
    // let nd = new Date(d.setDate(d.getDate()-1))
    // ..present date mathi -1
    let medicineSchema = Yup.object({
        name: Yup.string()
            .required(),
        price: Yup.number()
            .required()
            .typeError('please enter valid price'),
        expiry: Yup.date()
            .required("please enter EXp date")
            .min(new Date(), 'Must be in present and past'),

        desc: Yup.string()
            .required()
            .test("mdisc", "Maximum 100 word allow", function (val) {
                let arr = val.split(" ");
                if (arr.length > 100) {
                    return false;
                } else {
                    return true;
                }
            }),
            presM : Yup.string()
            .required()
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            expiry: '',
            desc: '',
            presM:''

        },
        validationSchema: medicineSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            handleClose()
            // console.log(values);
            onhandlesubmit(values)


        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur , setFieldValue } = formik
    return (

        <>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button> */}
            <Button variant="outlined" onClick={handleClickOpen}>Add Medicine</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine</DialogTitle>
                <DialogContent>
                    <form method="post" onSubmit={handleSubmit} >
                        <TextField
                            margin="dense"
                            name="name"
                            id="name"
                            label="Medicine Name"
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
                            name="price"
                            id="price"
                            label="Price"
                            type="number"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.price && touched.price ? errors.price : ''}</span>

                        <TextField
                            margin="dense"
                            name="expiry"
                            id="expiry"
                            label="Exp Date"
                            type="date"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.expiry}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.expiry && touched.expiry ? errors.expiry : ''}</span>

                        <TextField

                            margin="dense"
                            name="desc"
                            id="desc"
                            label="Discription"
                            type="text"
                            fullWidth
                            variant="standard"
                            sx={{ margin: '10px', padding: '25px 0 0 0' }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.desc}
                        />
                        <span style={{ color: "red" }} className='error'>{errors.desc && touched.disc ? errors.desc : ''}</span>



                        <div className='col-md-4 form-group mt-3' style={{ display: 'flex' }}>
                            <input type="file"
                                name="presM"

                                onChange={(event) => setFieldValue("presM", event.target.files[0])}

                            />
                            {
                                values.presM === '' ? '' : <img src={typeof values.presM === 'string' ? values.presM : URL.createObjectURL(values.presM)} style={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                            }

                            <span style={{ color: 'red' }} className='error'>{errors.presM && touched.presM ? errors.pres : null}</span>
                            <div className="validate" />
                        </div>
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







// import { Box, Button } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { useFormik } from 'formik';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import * as Yup from 'yup'
// import { styled } from 'styled-components';


// function Medicineform({ onhandlesubmit, onupdate }) {
//     const [open, setOpen] = useState(false);

//     useEffect(() => {
//         if (onupdate) {
//             handleClickOpen()
//             formik.setValues(onupdate)
//         }
//     }, [onupdate])

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     // var d = new Date();
//     // let nd = new Date(d.setDate(d.getDate()-1))
//     // ..present date mathi -1
//     let medicineSchema = Yup.object({
//         mname: Yup.string()
//             .required(),
//         expdate: Yup.date()
//             .required("please enter EXp date")
//             .min(new Date(), 'Must be in present and past'),
//         mprice: Yup.number()
//             .required()
//             .typeError('please enter valid price'),

//         mdisc: Yup.string()
//             .required()
//             .test("mdisc", "Maximum 100 word allow", function (val) {
//                 let arr = val.split(" ");
//                 if (arr.length > 100) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }),
//     })

//     const formik = useFormik({
//         initialValues: {
//             mname: '',
//             expdate: '',
//             mprice: '',
//             mdisc: '',

//         },
//         validationSchema: medicineSchema,
//         enableReinitialize: true,
//         onSubmit: (values, action) => {
//             action.resetForm()
//             handleClose()
//             // console.log(values);
//             onhandlesubmit(values)


//         }
//     })

//     const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik
//     return (

//         <>
//             {/* <Button variant="outlined" onClick={handleClickOpen}>
//                 Open form dialog
//             </Button> */}
//             <Button variant="outlined" onClick={handleClickOpen}>Add Medicine</Button>
//             <Dialog open={open} onClose={handleClose}>
//                 <DialogTitle>Medicine</DialogTitle>
//                 <DialogContent>
//                     <form method="post" onSubmit={handleSubmit} >
//                         <TextField
//                             margin="dense"
//                             name="mname"
//                             id="mname"
//                             label="Medicine Name"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             sx={{ margin: '10px', padding: '25px 0 0 0' }}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.mname}
//                         />
//                         <span style={{ color: "red" }} className='error'>{errors.mname && touched.mname ? errors.mname : ''}</span>
//                         <TextField

//                             margin="dense"
//                             name="expdate"
//                             id="expdate"
//                             label="Exp Date"
//                             type="date"
//                             fullWidth
//                             variant="standard"
//                             sx={{ margin: '10px', padding: '25px 0 0 0' }}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.expdate}
//                         />
//                         <span style={{ color: "red" }} className='error'>{errors.expdate && touched.expdate ? errors.expdate : ''}</span>
//                         <TextField

//                             margin="dense"
//                             name="mprice"
//                             id="mprice"
//                             label="Price"
//                             type="number"
//                             fullWidth
//                             variant="standard"
//                             sx={{ margin: '10px', padding: '25px 0 0 0' }}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.mprice}
//                         />
//                         <span style={{ color: "red" }} className='error'>{errors.mprice && touched.mprice ? errors.mprice : ''}</span>

//                         <TextField

//                             margin="dense"
//                             name="mdisc"
//                             id="mdisc"
//                             label="Discription"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             sx={{ margin: '10px', padding: '25px 0 0 0' }}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             value={values.mdisc}
//                         />
//                         <span style={{ color: "red" }} className='error'>{errors.mdisc && touched.mdisc ? errors.mdisc : ''}</span>
//                         <DialogActions>
//                             <Button onClick={handleClose}>Cancel</Button>
//                             <Button type="submit">Submit</Button>
//                         </DialogActions>
//                     </form>
//                 </DialogContent>
//             </Dialog>
//         </>
//     );
// }

// export default Medicineform;