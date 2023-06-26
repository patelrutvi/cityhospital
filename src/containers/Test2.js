import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup'

function Test2(props) {

    const hobbi = [
        {
            defaultValue: "sports",
        },
        {
            defaultValue: "movies",
        },
        {
            defaultValue: "music",
        },
    ];


    let testvaliSchema = Yup.object({
        name: Yup.string()
            .required('plase enter full name')
            .matches(
                /^[a-zA-Z ]{2,30}$/, 'plase anter valid name'
            ).test('name', 'maximum 3 word allowed',
                function (val) {
                    let arr = val.split(" ")
                    //   console.log(arr);
                    if (arr.length < 3) {
                        return false
                    }
                    if (arr.length > 3) {
                        return false
                    } else {
                        return true
                    }
                }),

        email: Yup.string().required('plase enter email')
            .email('plase enter valid email'),
        pass: Yup.string()
            .required('plase enter password')
            .matches(
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                'password must be eight characters including one uppercase letter, one special character and alphanumeric characters?'
            ),
        conpass: Yup.string()
            .required("Please enter confirm password")
            .oneOf([Yup.ref("pass"), ''], "Password Must Match"),

        mobile: Yup.string()
            .required('please enter mobile number')
            .matches(
                /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'please enter 10 digit mobile number'
            ),

        age: Yup.number()
            .min(0)
            .max(150)
            .required("please enter age"),
        dob: Yup.string()
            .required("plase enter date of birth")
            .test('dob', 'plase enter valid date of birth',
                function (val) {
                    // console.log(val);
                    let today = new Date();
                    let bod = new Date(val);
                    console.log(today > bod);
                    if (today > bod) {
                        return true
                    } else {
                        return false
                    }
                }),
        add: Yup.string()
            .required("plase enter Address")
            .test("add", "Maximum 5 word allow", function (val) {
                let arr = val.split(" ");
                if (arr.length > 5) {
                    return false;
                } else {
                    return true;
                }
            }),

        country: Yup.string()
            .required("plase select country")
            .test('country', 'please select Conutry', function (val) {
                if (val === 0) {
                    return false
                } else {

                    return true
                }
            }),
        gender: Yup.boolean()
            .required()
            .oneOf([0, 1])
            .test("gender", "Gender must be selected.", function (val) {
            }),
        hobbies: Yup.boolean()
            .required("Must be selected.")
            .test('hobbies', 'please select 2 hobbeis',
                function (val) {
                    if (val == 'true') {
                        return false
                    } else {

                        return true
                    }
                }),

        // .test("hobbies", "Must 2 be selected.", function (val) {
        //   console.log(hobbies.length, val);
        //   if (val.checked > 2) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // }),
        tc: Yup.boolean()
            .required("Must be selected.").oneOf([true], "You must accept the terms and conditions"),
    })


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pass: '',
            conpass: '',
            mobile: '',
            age: '',
            dob: '',
            add: '',
            country: '',
            gender: '',
            hobbies: '',
            tc: ''

        },
        validationSchema: testvaliSchema,
        enableReinitialize: true,
        onsubmit: (values, action) => {
            action.resetForm()
            console.log(values);
        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik
    return (
        <div>
            <div className='container'>

                <form className="php-email-form" method="post" onSubmit={handleSubmit} >
                    <div className='mainform' >
                        <div className="name">
                            <p>Full Name</p>
                            <input type="text"
                                name="name"
                                id='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}

                            />
                            <span style={{ color: "red" }} className='error'>{errors.name && touched.name ? errors.name : ''}</span>

                        </div>
                        <div className="email">
                            <p>Email </p>
                            <input type="text"
                                name="email"
                                id='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}

                            />
                            <span style={{ color: "red" }} className='error'>{errors.email && touched.email ? errors.email : ''}</span>
                        </div>
                        <div className="pass">
                            <p>Password</p>
                            <input type="password"
                                name="pass"
                                id='pass'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pass}

                            />
                            <span style={{ color: "red" }} className='error'>{errors.pass && touched.pass ? errors.pass : ''}</span>
                        </div>

                        <div className="con-pass">
                            <p>Conform Password</p>
                            <input type="password"
                                name="conpass"
                                id='con-pass'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.conpass}

                            />
                            <span style={{ color: "red" }} className='error'>{errors.conpass && touched.conpass ? errors.conpass : ''}</span>
                        </div>
                        <div className="num">
                            <p>Mobile Number</p>
                            <input type="text"
                                name="mobile"
                                id='number'
                                maxLength={10}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mobile}

                            />
                            <span style={{ color: "red" }} className='error'>{errors.mobile && touched.mobile ? errors.mobile : ''}</span>
                        </div>
                        <div className="age">
                            <p>Age</p>
                            <input type="text"
                                name="age"
                                id='age'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.age}

                            />
                            <span style={{ color: "red" }} className='error'>{errors.age && touched.age ? errors.age : ''}</span>
                        </div>
                        <div className="dob">
                            <p>Date Of Birth</p>
                            <input type="date"
                                name="dob"
                                id='dob'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dob}
                            />
                            <span style={{ color: "red" }} className='error'>{errors.dob && touched.dob ? errors.dob : ''}</span>
                        </div>
                        <div className="address">
                            <p>Address</p>
                            <textarea
                                name="add"
                                id="add"
                                cols="30"
                                rows="3"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.add}
                            ></textarea>

                            <span style={{ color: "red" }} className='error'>{errors.add && touched.add ? errors.add : ''}</span>
                        </div>

                        <div className="country" id='country'>
                            <p>Country</p>
                            <span style={{ color: "red" }} className='error'>{errors.country && touched.country ? errors.country : ''}</span>
                            <br></br>
                            <select name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}>
                                <option value={0}>Select</option>
                                <option value="au">Australia</option>
                                <option value="in">India</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                            </select>

                        </div>
                        <div className="gender" id='gender'>
                            <p>Gender</p>
                            <span style={{ color: "red" }} className="error">
                                {errors.gender && touched.gender ? errors.gender : ''}
                            </span>
                            <div className="form-inline">
                                <p>

                                    <input
                                        type="radio"
                                        name="gender"
                                        defaultValue="male"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gender}
                                    />{" "}
                                    Male
                                </p>
                                <p>
                                    <input
                                        type="radio"
                                        name="gender"
                                        defaultValue="female"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.gender}
                                    />{" "}
                                    Female
                                </p>


                            </div>
                        </div>
                        <div className="hobie" id='hobbie'>
                            <p>Hobbies <i>(Optional)</i></p>
                            <span style={{ color: "red" }} className='error'>{errors.hobbies && touched.hobbies ? errors.hobbies : ''}</span>

                            <div className="form-inline">
                                <p><input type="checkbox"
                                    name="hobbies"
                                    defaultValue="sports"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.hobbies}
                                /> Sports</p>
                                <p><input type="checkbox"
                                    name="hobbies"
                                    defaultValue="movies"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.hobbies}
                                /> Movies</p>
                                <p><input type="checkbox"
                                    name="hobbies"
                                    defaultValue="music"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.hobbies}
                                /> Music</p>
                            </div>
                        </div>


                        <p>
                            <span style={{ color: "red" }} className='error'>{errors.tc && touched.tc ? errors.tc : ''}</span>
                            <input type="checkbox"
                                name="tc"
                                defaultValue="tc"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tc}
                            /> Terms & Condition</p>




                        <div className="btn">
                            <input type="submit" defaultValue="Submit" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Test2;