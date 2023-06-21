import React, { useState } from 'react';

function Auth(props) {

    const [authdata, setauth] = useState('login')
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
                        <form className="php-email-form">
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
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                <div className="validate" />
                                            </div>
                                            :
                                            null
                                        )

                                }
                                {/* ..........email.......... */}
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate" />
                                </div>

                                {/* ...........password......... */}
                                {
                                    authdata === 'login'
                                        ?
                                        <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <input type="password" className="form-control" name="pass" id="pass" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 2 chars" />
                                            <div className="validate" />
                                        </div>
                                        :
                                        (authdata === 'sign up'
                                            ?
                                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                                <input type="password" className="form-control" name="pass" id="pass" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 2 chars" />
                                                <div className="validate" />
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
                                    <div className="text-center"><button type="submit">Login</button></div>
                                    :
                                    (authdata === 'sign up'
                                        ?
                                        <div className="text-center"><button type="submit">Sign Up</button></div>
                                        : <div className="text-center"><button type="submit">submit</button></div>
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
                    </div>
                </section>



            </>
        </div>
    );
}

export default Auth;