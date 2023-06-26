import React from 'react';

function Test2(props) {
    return (
        <div>
            <div>

                <form className="php-email-form" method="post">
                    <div className="name">
                        <p>Full Name</p>
                        <input type="text" name="name" id='name'/>

                    </div>
                    <div className="email">
                        <p>Email Address</p>
                        <input type="text" name="email" id='email' />

                    </div>
                    <div className="pass">
                        <p>Password</p>
                        <input type="password" name="pass" id='pass'/>

                    </div>

                    <div className="con-pass">
                        <p>Conform Password</p>
                        <input type="password" name="con-pass" id='con-pass'/>

                    </div>
                    <div className="num">
                        <p>Mobile Number</p>
                        <input type="text" name="mobile" id='number' maxLength={10} />

                    </div>
                    <div className="country" id='country'>
                        <p>Country</p>
                        <select name="country">
                            <option value={0}>Select</option>
                            <option value="au">Australia</option>
                            <option value="in">India</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                        </select>

                    </div>
                    <div className="gender" id='gender'>
                        <p>Gender</p>

                        <div className="form-inline">
                            <p><input type="radio" name="gender" defaultValue="male" /> Male</p>
                            <p><input type="radio" name="gender" defaultValue="female" /> Female</p>
                        </div>
                    </div>
                    <div className="hobie" id='hobbie'>
                        <p>Hobbies <i>(Optional)</i></p>

                        <div className="form-inline">
                            <p><input type="checkbox" name="hobbies" defaultValue="sports" /> Sports</p>
                            <p><input type="checkbox" name="hobbies" defaultValue="movies" /> Movies</p>
                            <p><input type="checkbox" name="hobbies" defaultValue="music" /> Music</p>
                        </div>
                    </div>
                    <div className="btn">
                        <input type="submit" defaultValue="Submit" />
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Test2;