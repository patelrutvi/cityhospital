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
import { json } from 'react-router-dom';

// .....table...
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
    useEffect(() => {
        const medicine = JSON.parse(localStorage.getItem('medicine'));
        if (medicine) {
        
            setmedicine(medicine);
        }
    }, [medicine]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAdd = (data) => {
        console.log(data);
        handleClose()

        let getlocaldata = JSON.parse(localStorage.getItem("medicine"))
        console.log(getlocaldata);
        let rno = Math.floor(Math.random() * 1000)

        let newdata = { id: rno, ...data }

        if (getlocaldata === null) {
            localStorage.setItem("medicine", JSON.stringify([newdata]))
        } else {
            getlocaldata.push(newdata)
            console.log(getlocaldata);
            localStorage.setItem("medicine", JSON.stringify(getlocaldata))
        }

    }

    const handleDelete = (i) => {
        console.log("delete", i);

        setmedicine((i) =>
            i.filter((_, index) => index !== i)
        );

        // let getlocaldata = JSON.parse(localStorage.getItem("medicine"))
        // console.log(getlocaldata);

        // let rdata = getlocaldata.filter((c) => c.id == i)
        // console.log(rdata, "rdata");
        // // rdata.remove()

        // getlocaldata.map((v, index) => {
        //     if (v.id === i) {
        //         getlocaldata.splice(index, 1)
        //     }
        // })
        // console.log(getlocaldata);
    }


    // var d = new Date();
    // let nd = new Date(d.setDate(d.getDate()-1))
    // ..present date mathi -1

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
            // console.log(values);
            handleAdd(values)


        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    // console.log(errors);



    return (
        <div>
            <Box height={40} />

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

            {/* .......table... */}

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
            </TableContainer>


        </div>
    );
}