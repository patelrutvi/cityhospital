import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup'
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import { Spantag } from '../components/UI/Input/input.style';
import Span from '../components/UI/span/Span';




function Auth(props) {

    const [authdata, setauth] = useState('login')
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("loginnn");
        localStorage.setItem("login", "true")
        navigate("/")
    }

    let authobj = {}, intivalue = {}
    if (authdata === 'login') {
        authobj = {
            email: Yup.string().required('please enter email').email('please enter valid email'),
            pass: Yup.string().required('please enter password').matches(
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                'password must be eight characters including one uppercase letter, one special character and alphanumeric characters?'
            )
        }
        intivalue = {
            email: '',
            pass: ''
        }
    } else if (authdata === 'sign up') {
        authobj = {
            name: Yup.string().required('please enter name'),
            email: Yup.string().required('please enter email').email('please enter valid email'),
            pass: Yup.string().required('please enter password').matches(
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                'password must be eight characters including one uppercase letter, one special character and alphanumeric characters?'
            )
        }
        intivalue = {
            name: '',
            email: '',
            pass: ''
        }
    } else {
        authobj = {
            email: Yup.string().required('please enter email').email('please enter valid email'),
        }
        intivalue = {
            email: ''

        }
    }

    const authSchema = Yup.object(authobj)

    const formik = useFormik({
        initialValues: intivalue,
        validationSchema: authSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            console.log(values);
            if (authdata === 'login') {
                handleLogin()
            }

        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    return (
        <div className='auth'>

            <>

                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            {/* .........Heading......... */}
                            {
                                authdata === 'login'
                                    ? <h2>Login</h2>
                                    :
                                    (authdata === 'sign up'
                                        ? <h2>Sign Up</h2>
                                        :
                                        <h2>Forgot password</h2>
                                    )
                            }
                            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                        </div>
                        <form className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row" style={{ justifyContent: 'center' }}>
                                {/* ........name....... */}
                                {
                                    authdata === 'login'
                                        ?
                                        null
                                        :
                                        (authdata === 'sign up'
                                            ?
                                            <div className="col-md-7 form-group">
                                                <Input type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                    errorText={errors.name && touched.name ? errors.name : ''}
                                                />
                                                <div className="validate" />
                                                <Span className='error'>{errors.name && touched.name ? errors.name : ''}</Span>
                                            </div>
                                            :
                                            null
                                        )

                                }
                                {/* ..........email.......... */}
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <Input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        errorText={errors.email && touched.email ? errors.email : ''}
                                    />
                                    <div className="validate" />
                                    <Span className='error'>{errors.email && touched.email ? errors.email : ''}</Span>
                                </div>

                                {/* ...........password......... */}
                                {
                                    authdata === 'login'
                                        ?
                                        <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <Input type="password"
                                                className="form-control"
                                                name="pass" id="pass"
                                                placeholder="Your Password"
                                                data-rule="minlen:4"
                                                data-msg="Please enter at least 2 chars"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.pass}
                                                errorText={errors.pass && touched.pass ? errors.pass : ''}

                                            />
                                            <div className="validate" />
                                            <Span className='error'>{errors.pass && touched.pass ? errors.pass : ''}</Span>
                                        </div>
                                        :
                                        (authdata === 'sign up'
                                            ?
                                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                                <Input type="password"
                                                    className="form-control"
                                                    name="pass"
                                                    id="pass"
                                                    placeholder="Your Password"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 2 chars"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.pass}
                                                    errorText={errors.pass && touched.pass ? errors.pass : ''}

                                                />
                                                <div className="validate" />
                                                <Span className='error'>{errors.pass && touched.pass ? errors.pass : ''}</Span>
                                            </div>
                                            :
                                            null
                                        )
                                }

                            </div>
                            {/* ......buttonnnn...... */}
                            {
                                authdata === 'login'
                                    ?
                                    <div className="text-center"> <Button type="primary" btnDisable={true}>Login1</Button></div>


                                    :
                                    (authdata === 'sign up'
                                        ?
                                        <div className="text-center"><Button type="secondary">Sign Up</Button></div>
                                        : <div className="text-center"><Button type="outlined">submit</Button></div>
                                    )

                            }
                            {/* ......link...sign up ////....login... */}
                            {
                                authdata === 'login'
                                    ?
                                    <div>Create a new account<a href='#' onClick={() => setauth('sign up')}> Sign Up</a></div>
                                    :
                                    <div>Already have an account <a href='#' onClick={() => setauth('login')}> log In</a></div>
                            }
                            {/* ........link.......forgot password.... */}
                            <div>
                                {
                                    authdata === 'login' ?
                                        <a href='#' onClick={() => setauth('forgot')} >Forgot Password?</a>
                                        : (authdata === 'sign up' ? null : null)
                                }
                            </div>
                        </form>
                    </div >

                </section>



            </>
        </div>
    );
}

export default Auth;