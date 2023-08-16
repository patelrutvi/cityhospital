import React, { useEffect, useState } from 'react';
import Button from '../components/UI/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { appoinmentfetch, getappoinment } from '../../redux/slice/appoimentslice';

// ........tab..........
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListIcon from '@mui/icons-material/List';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

// ....grid table....
import { DataGrid } from '@mui/x-data-grid';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase';


function Appoiment(props) {
    const [value, setValue] = React.useState(0);
    const [appdata, setappdata] = useState([])
    const appoimentval = useSelector(state => state.appoiment)
    console.log(appoimentval, "appoimentval");

    const handleChange1 = (event, newValue) => {
        console.log(newValue, "newValue");
        setValue(newValue);
    };
    const dispatch = useDispatch()

    useEffect((id) => {
        dispatch(getappoinment(id))
        console.log(id, "dataiddddddddddd");

    }, [])
  
    let appoimentSchema = Yup.object({
        name: Yup.string().required('Please enter name').matches(/^[a-z]+$/, 'Please enter valid name'),
        email: Yup.string().email('please enter valid email').required('Please enter email'),
        phone: Yup.string()
            .required('please enter phone number')
            .matches(
                /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'please enter 10 digit phone number'
            ),
        date: Yup.date()
            .required("please enter appoiment date")
            .min(new Date(), 'Must be in present and future'),
        department: Yup.string()
            .required("plase select department")
            .test('department', 'please select department', function (val) {
                if (val === 0) {
                    return false
                } else {

                    return true
                }
            }),
        message: Yup.string().required('Please enter message')
            .test('message', 'Maximum 5 word allow',
                function (val) {
                    let arr = val.split(" ")
                    if (arr.length > 5) {
                        return false;
                    } else {
                        return true
                    }
                }
            ),

    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: appoimentSchema,
        onSubmit: values => {
            console.log(values);
            dispatch(appoinmentfetch(values))
        },
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'phone', headerName: 'phone', width: 130 },
        { field: 'date', headerName: 'date', width: 130 },
        { field: 'department', headerName: 'department', width: 130 },
        { field: 'message', headerName: 'message', width: 130 },

    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <div>
            <Tabs value={value} onChange={handleChange1} aria-label="icon tabs example">
                {/* <Tab icon={<PhoneIcon />} aria-label="phone" /> */}
                <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                <Tab icon={< ListIcon />} aria-label="person" />
            </Tabs>

            {
                value === 0
                    ?
                    <section id="appointment" className="appointment">
                        <div className="container">
                            <div className="section-title">
                                <h2>Make an Appointment</h2>
                                <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                    blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                    Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                            </div>
                            <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}

                                        />
                                        <span style={{ color: 'red' }} className='error'>{errors.name && touched.name ? errors.name : null}</span>
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            data-rule="email"
                                            data-msg="Please enter a valid email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}

                                        />
                                        <span style={{ color: 'red' }} className='error'>{errors.email && touched.email ? errors.email : null}</span>
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="tel"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}

                                        />
                                        <span style={{ color: 'red' }} className='error'>{errors.phone && touched.phone ? errors.phone : null}</span>
                                        <div className="validate" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="date"
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="Appointment Date"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                        />
                                        <span style={{ color: 'red' }} className='error'>{errors.date && touched.date ? errors.date : null}</span>
                                        <div className="validate" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select
                                            name="department"
                                            id="department"
                                            className="form-select"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.department}
                                        >

                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        <span style={{ color: 'red' }} className='error'>{errors.department && touched.department ? errors.department : null}</span>
                                        <div className="validate" />

                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message (Optional)"
                                        defaultValue={""}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}

                                    />
                                    <span style={{ color: 'red' }} className='error'>{errors.message && touched.message ? errors.message : null}</span>
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"> <Button type="submit">Make anAppointment</Button></div>
                            </form>
                        </div>
                    </section>

                    :
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={appoimentval.apt}
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

            }

        </div>

    );
}

export default Appoiment;