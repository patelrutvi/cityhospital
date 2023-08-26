import React, { useContext, useEffect } from 'react';
import MedicineList from './MedicineList';
import { useState } from 'react';
import { Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addtoCart } from '../../../redux/action/addtocart.action';
import {   getmedicinedata } from '../../../redux/action/medicine.action';
import { addFavIcon } from '../../../redux/action/myfav.action';
import styled from '@emotion/styled';
import { colors } from '@mui/material';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../../../Context/ThameContext';


function Usermedicine(props) {
    const navigate = useNavigate();
    const [data, setdata] = useState([])
    const [filterdata, setfilterdata] = useState([])
    const dispatch = useDispatch()
    const usermedival = useSelector(state => state.medicine)
    console.log("user medicine js", usermedival);
    const mayfavdata= useSelector((state) => state.fav)
    
    const theme = useContext(ThemeContext)

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
    const handleicon = (id) => {
        console.log("icon",id);
        dispatch(addFavIcon(id))
        

    }

    return (

        <>
           <section id="contact" className={`contact ${theme.theme}`}>
      <div className="container">
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
            </div>

            <div class="input-group" style={{marginLeft:'90px'}}>
                <div class="form-outline" style={{ width: '80%', margin: '30px', marginRight: '0px' }}>
                    <input id="search-input"
                        type="search"
                        className={`form-control ${theme.theme}`}
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
                     handleIcon1={handleicon}
                     />
                </div>

            </div>
            </section>
        </>

    );
}

export default Usermedicine;


