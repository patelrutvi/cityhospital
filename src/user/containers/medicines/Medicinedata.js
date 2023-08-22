import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Medicinedata() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const medicineData = useSelector((state) => state.medicine);
    console.log(medicineData,'medicine data');

    console.log(id,"iddddd");

    let mdata = medicineData.mediData.filter((v) => console.log(v.id === parseInt(id)))
    console.log(mdata,"mdata");

    return (
        <div style={{ margin: '40px' }}>
            <p>Medicine Data</p>
        </div>
    );
}

export default Medicinedata;