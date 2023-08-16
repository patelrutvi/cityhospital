import React from 'react';
import Button from '../components/UI/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup'


function Appoiment(props) {

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
        },
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik

    return (
        <div>
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
        </div>

    );
}

export default Appoiment;