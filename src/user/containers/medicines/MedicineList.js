import React from 'react';
import CustomCard from '../../components/UI/CustomCard';
import { Col } from 'reactstrap';

function MedicineList({ mdata }) {
    return (
        <div>
            {
                mdata.map((v, i) => {
                    return (
                        <Col sm="3">
                            <CustomCard values={v} />
                        </Col>
                    )
                })
            }
        </div>
    );
}

export default MedicineList;