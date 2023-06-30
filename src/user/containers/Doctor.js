import React from 'react';
import { useParams } from 'react-router-dom';


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


function Doctor(props) {
    const { id } = useParams()

    // console.log("idd", id);

    // let getdata = JSON.parse(localStorage.getItem("drdata"))
    // console.log(getdata, "get");


    // let data = getdata.filter((f) => f.id === parseInt(id))
    // console.log(getdata.filter((f) => f.id == id));
    // console.log(data, "filter dataaaaa");


    let data = doctordata.filter((f) => f.id === parseInt(id))
    console.log(data, "filter dataaaaa");
    


    return (
        <div className='drpr-data '>
            {

                <>
                    <div>
                        <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src={data[0].url} className="img-doctor" alt /></div>
                                <div className="member-info" >
                                    <h4 >{data[0].name}</h4>
                                    <span>{data[0].speciality}</span>
                                    <p>{data[0].discription}</p>
                                    <div className="social">
                                        <a href><i className="ri-twitter-fill" /></a>
                                        <a href><i className="ri-facebook-fill" /></a>
                                        <a href><i className="ri-instagram-fill" /></a>
                                        <a href> <i className="ri-linkedin-box-fill" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>

           

                
            }

        </div>
    );
}

export default Doctor;