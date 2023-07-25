import React from 'react';
import CustomCard from '../../components/UI/CustomCard';
import { Col, Row } from 'reactstrap';

function MedicineList({ mdata , handleCart1}) {
    return (
        <div>
            <Row >
            {
                mdata.map((v, i) => {
                    return (
                        <Col sm="6">
                            <CustomCard 
                            values={v}
                             btnval={"Add To Cart"}
                             onclick1={handleCart1}
                             />
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    );
}

export default MedicineList;