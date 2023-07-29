import React from 'react';
import CustomCard from '../../components/UI/CustomCard';
import { Col, Row } from 'reactstrap';

function MedicineList({ mdata , handleCart1,handleIcon1}) {
    return (
        <div>
            <Row >
            {
                mdata.map((v, i) => {
                    return (
                        <Col sm="3">
                            <CustomCard 
                            values={v}
                             btnval={"Add To Cart"}
                             onclick1={handleCart1}
                            onclick2={handleIcon1}

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