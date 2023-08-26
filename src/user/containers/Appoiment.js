import React, { useContext, useEffect, useState } from 'react';
import Button from '../components/UI/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { addappoinment, deleteappoinment, getappoinment, updateappoinment } from '../../redux/slice/appoimentslice';

// ........tab..........
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListIcon from '@mui/icons-material/List';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { ThemeContext } from '../../Context/ThameContext';


function Appoiment(props) {
    const theme = useContext(ThemeContext)

    const [filterdata, setfilterdata] = useState([])
    const [value, setValue] = React.useState(0);
    const [update, setupdate] = useState(false)
    const appoimentval = useSelector(state => state.appoiment)
    console.log(appoimentval, "appoimentval");

    const handleChangeTab = (event, newValue) => {

        console.log(newValue, "newValue");
        setValue(newValue);
    };
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getappoinment())
    }, [])
    const handledelete = (data) => {
        // console.log(id);
        dispatch(deleteappoinment(data))
    }

    const handlechange = (val) => {
        console.log(val, "val");
        // let medicine = JSON.parse(localStorage.getItem('medicine'));
        let fdata = appoimentval.apt.filter((v) =>
            v.name.toLowerCase().includes(val.toLowerCase())
            || v.email.toString().includes(val)
            || v.phone.toString().includes(val)
            || v.date.toString().includes(val)
            || v.department.toLowerCase().includes(val.toLowerCase())
            || v.message.toLowerCase().includes(val.toLowerCase())
        )

        console.log(fdata);
        setfilterdata(fdata)

    }


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
        pres: Yup.mixed().required()

    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            pres: ''
        },
        validationSchema: appoimentSchema,
        onSubmit: (values, action) => {
            console.log(values);
            if (update) {
                dispatch(updateappoinment(values))
            } else {
                dispatch(addappoinment(values))
            }

            setupdate(false)
            action.resetForm()
            setValue(1)

        },
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues, setFieldValue } = formik
    const handleEdit = (values) => {
        console.log(values);
        setupdate(true)
        setValue(0)
        setValues(values)

    }

    return (
        <div>
            <section id="appointment" className={`appointment ${theme.theme}`}>
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div style={{ marginLeft: '37%', marginBottom: '20px' }}>
                        <Tabs value={value} onChange={handleChangeTab} aria-label="icon tabs example">
                            {/* <Tab icon={<PhoneIcon />} aria-label="phone" /> */}
                            <Tab icon={<AppRegistrationIcon />} label="BOOK APPOINMENT" />
                            <Tab icon={< ListIcon />} label="LIST APPOINMENT" />
                        </Tabs>
                    </div>
                    {
                        value === 0
                        &&

                        <form action method="post" role="form" className={`php-email-form ${theme.theme}`} onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text"
                                        name="name"
                                        className={`form-control ${theme.theme}`}
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
                                        className={`form-control ${theme.theme}`}
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
                                        className={`form-control ${theme.theme}`}
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
                                        className={`form-control datepicker ${theme.theme}`}
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

                                        className={`form-select ${theme.theme}`}
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

                            <div className='col-md-4 form-group mt-3' style={{ display: 'flex' }}>
                                <input type="file"
                                    name="pres"
                                    className={`form-control ${theme.theme}`}
                                    onChange={(event) => setFieldValue("pres", event.target.files[0])}

                                />
                                {
                                    values.pres === '' ? '' : <img src={typeof values.pres === 'string' ? values.pres : URL.createObjectURL(values.pres)} style={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                                }

                                <span style={{ color: 'red' }} className='error'>{errors.pres && touched.pres ? errors.pres : null}</span>
                                <div className="validate" />
                            </div>

                            <div className="form-group mt-3">
                                <textarea

                                    className={`form-control ${theme.theme}`}
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

                    }

                    {

                        value === 1 &&


                        <>
                            <div class="input-group" style={{ marginLeft: '20px' }}>
                                <div class="form-outline" style={{ width: '90%', margin: '30px', marginRight: '0px' }}>
                                    <input id="search-input"
                                        type="search"
                                        className={`form-control ${theme.theme}`}
                                        onChange={(e) => handlechange(e.target.value)} />

                                </div>
                                <button id="search-button" type="button" class="btn btn-primary" style={{ margin: '30px 0px' }}>
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>


                            {
                                appoimentval.apt.map((c, i) => {
                                    return (
                                        <>
                                            <div className={`card mb-3 ${theme.theme}`}>
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex flex-row align-items-center">

                                                            <img src={c.pres} style={{ width: "100px", height: "100px" }} />

                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">

                                                            <div className="ms-3">
                                                                <h5>{c.name}</h5>
                                                                <p className="small mb-0">{c.email}</p>
                                                            </div>

                                                        </div>
                                                        <div className="d-flex flex-row align-items-center">
                                                            <div className="ms-3">

                                                                <h5 className="fw-normal mb-0">{c.phone}</h5>

                                                            </div>
                                                            <div style={{ width: 130 }}>

                                                                <h5 className="ms-3">{c.date}</h5>

                                                            </div>
                                                            <div style={{ width: 130 }}>

                                                                <h5 className="ms-3">{c.description}</h5>
                                                            </div>
                                                            <div style={{ width: 180 }}>

                                                                <h5 className="ms-3">{c.message}</h5>
                                                            </div>

                                                            <div style={{ width: 130 }}>

                                                                <button type="button" class="btn btn-primary btn-lg" onClick={() => handledelete(c)}>Delete</button>

                                                            </div>


                                                            <button type="button" class="btn btn-primary btn-lg" onClick={() => handleEdit(c)}>Edit</button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                        </>

                                    )
                                })

                            }


                        </>
                    }

                </div>
            </section>


        </div >

    );
}

export default Appoiment;