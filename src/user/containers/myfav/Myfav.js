import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavData } from '../../../redux/action/myfav.action';
import { ThemeContext } from '../../../Context/ThameContext';

function Myfav(props) {
    const theme = useContext(ThemeContext)

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


    const handleDeleteFAV = (pid) => {
        // console.log(pid,"delete");
        dispatch(deleteFavData(pid))
    }


    return (
        <section id="cart" className={`cart ${theme.theme}`} >
            <div className='container'>
                <div className="section-title">
                    <h2>Cart</h2>
                    {
                        favmedi.map((f) => {
                            return (
                                <>
                                    <div className={`card mb-3 ${theme.theme}`}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-row align-items-center">

                                                    <div className="ms-3">
                                                        <h5>{f.name}</h5>

                                                    </div>
                                                    <div className="ms-5">

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

                                                    <a href="#!" style={{ color: '#cecece' }} onClick={() => handleDeleteFAV(f.pid)}><i className="fas fa-trash-alt" /></a>


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