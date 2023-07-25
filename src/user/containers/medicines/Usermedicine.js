import React, { useEffect } from 'react';
import MedicineList from './MedicineList';
import { useState } from 'react';
import { Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addtoCart } from '../../../redux/action/addtocart.action';
import { getmedicinedata } from '../../../redux/action/medicine.action';


function Usermedicine(props) {

    const [data, setdata] = useState([])
    const [filterdata, setfilterdata] = useState([])
    const dispatch = useDispatch()
    const usermedival = useSelector(state => state.medicine)
    console.log("user medicine js", usermedival);

    useEffect(() => {

        dispatch(getmedicinedata(data))

    }, [])


    const handlechange = (val) => {
        console.log(val,"val");

        // let medicine = JSON.parse(localStorage.getItem('medicine'));

        let fdata = usermedival.mediData.filter((v) =>
            v. name.toLowerCase().includes(val.toLowerCase())
            || v. price.toString().includes(val)
            || v.expiry.toString().includes(val)
            || v.desc.toLowerCase().includes(val.toLowerCase())
        )

        console.log(fdata);
        setfilterdata(fdata)

    }

    const handleCart = (id) => {
        dispatch(addtoCart(id))
        console.log("handleCart",id);
    }

    return (

        <>
            <div className="section-title">
                <h2>Medicine</h2>
                <p>
                    Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                    aliquam eget nibh eu euismod. Donec dapibus blandit quam
                    volutpat sollicitudin. Aenean ac turpis ante. Mauris velit
                    sapien, aliquet aliquet rhoncus quis, luctus at neque. Mauris
                    sit amet massa sed orci vehicula facilisis.
                </p>
            </div>

            <div class="input-group" style={{marginLeft:'90px'}}>
                <div class="form-outline" style={{ width: '80%', margin: '30px', marginRight: '0px' }}>
                    <input id="search-input"
                        type="search"
                        class="form-control"
                        onChange={(e) => handlechange(e.target.value)} />

                </div>
                <button id="search-button" type="button" class="btn btn-primary" style={{ margin: '30px 0px' }}>
                    <i class="fas fa-search"></i>
                </button>
            </div>

            <div className='container'>
                <div className='row gap-3' >
                    <MedicineList 
                     mdata={filterdata.length > 0 ? filterdata :usermedival.mediData}
                     handleCart1={handleCart}
                     
                     />
                </div>

            </div>
        </>

    );
}

export default Usermedicine;


