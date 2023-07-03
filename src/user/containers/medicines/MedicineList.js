import React from 'react';
import CustomCard from '../../components/UI/CustomCard';
import { Col, Row } from 'reactstrap';

function MedicineList({ mdata }) {
    return (
        <div>
            <Row >
            {
                mdata.map((v, i) => {
                    return (
                        <Col sm="3">
                            <CustomCard values={v} />
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    );
}

export default MedicineList;