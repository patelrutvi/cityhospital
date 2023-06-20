import React from 'react';
import { useParams } from 'react-router-dom';

function Doctor(props) {
    const { id } = useParams()

    console.log("idd", id);

    let getdata = JSON.parse(localStorage.getItem("drdata"))
    console.log(getdata, "get");
    let data = getdata.filter((f) => f.id == id)
    console.log(getdata.filter((f) => f.id == id));
    console.log(data, "filter dataaaaa");



    return (
        <div className='drpr-data '>
            {

                data.map((v) => {
                    return (
                       <>
                       <div>
                       <div className="col-lg-6 mt-4">
                            <div className="member d-flex align-items-start">
                                <div className="pic"><img src={v.url} className="img-doctor" alt /></div>
                                <div className="member-info" >
                                    <h4 >{v.name}</h4>
                                    <span>{v.speciality}</span>
                                    <p>{v.discription}</p>
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
                    )

                })
            }

        </div>
    );
}

export default Doctor;