import React, { useEffect, useState } from 'react';
// import Link from '../components/UI/Link/Link';
import { Link } from 'react-router-dom';
import Span from '../components/UI/span/Span';


const doctordata = [
    {
        id: 1,
        name: 'Atha Smith',
        speciality: 'Chief Medical Officer',
        discription: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
        url: "../assets/img/doctors/doctors-1.jpg"
    },
    {
        id: 2,
        name: 'John White',
        speciality: 'Anesthesiologist',
        discription: 'Aenean ac turpis ante. Mauris velit sapien.',
        url: "../assets/img/doctors/doctors-2.jpg"
    },
    {
        id: 3,
        name: 'Umika Loha',
        speciality: 'Cardiology',
        discription: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
        url: "../assets/img/doctors/doctors-3.jpg"
    },
    {
        id: 4,
        name: 'Daimy Smith',
        speciality: 'Neurosurgeon',
        discription: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
        url: "../assets/img/doctors/doctors-4.jpg"
    }
]

function Doctors(props) {
    const [fdoctordata, setfdoctordata] = useState(doctordata)

    localStorage.setItem("drdata", JSON.stringify(fdoctordata))

    return (
        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                          <Link to={'/doctor/visiting_doctors'}>Visiting doctors</Link>
                    </div>
                    <div className="row">
                        {
                            doctordata.map((v, i) => {
                                return (
                                    <>
                                        <div className="col-lg-6" >
                                            <div className="member d-flex align-items-start">
                                                {/* <p>{v.id}</p> */}
                                                <div className="pic" ><img src={v.url} className="img-doctor" alt /></div>
                                                <Link to={'/doctor/' + v.id + ''} style={{ color: 'gray' }}>
                                                    {console.log('/doctor/' + v.id + '')}
                                                    <div className="member-info">
                                                        <h4>{v.name}</h4>
                                                        <Span>{v.speciality}</Span>
                                                        <p>{v.discription}</p>
                                                        <div className="social">
                                                            <a href><i className="ri-twitter-fill" /></a>
                                                            <a href><i className="ri-facebook-fill" /></a>
                                                            <a href><i className="ri-instagram-fill" /></a>
                                                            <a href> <i className="ri-linkedin-box-fill" /></a>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                        </div>


                                    </>


                                )
                            })

                        }
                    </div>
                </div>
            </section >
        </div >

    );


}

export default Doctors;