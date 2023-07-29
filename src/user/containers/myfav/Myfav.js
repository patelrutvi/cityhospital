import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Myfav(props) {
    const medicinedata = useSelector((state) => state.medicine)
    const favdata = useSelector((state) => state.fav)
    console.log(medicinedata, favdata);
    const dispatch = useDispatch()

    let favmedi = favdata.myfav.map((v) => {
        let medidataf = medicinedata.mediData.find((m) => m.id === v.pid)
        let mdatacart = { ...medidataf, ...v }
        return mdatacart;

    })
    console.log(favmedi);

  

    return (
        <section id="cart" >
            <div className='container'>
                <div className="section-title">
                    <h2>Cart</h2>
                    {
                        favmedi.map((f) => {
                            return (
                                <>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-row align-items-center">

                                                    <div className="ms-3">
                                                        <h5>{f.name}</h5>
                                                        <p className="small mb-0">{f.desc.substring(0, 30)}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center">
                                                    <div style={{ width: 50 }}>
                                                       
                                                        <h5 className="fw-normal mb-0">{f.qyt}</h5>
                                                        
                                                    </div>
                                                    <div style={{ width: 80 }}>

                                                        <h5 className="mb-0">{f.price}</h5>

                                                    </div>
                                             
                                                    <a href="#!" style={{ color: '#cecece' }} ><i className="fas fa-trash-alt"  /></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                </>

                            )
                        })
                    }
                </div>
            </div>
        </section>

    );
}

export default Myfav;