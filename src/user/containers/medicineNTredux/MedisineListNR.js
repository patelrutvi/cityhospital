import React from 'react';
import CustomCard from '../../components/UI/CustomCard';
import { Col, Row } from 'reactstrap';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function MedisineListNR({ mdata ,onhandlecart}) {
    // console.log(mdata);
    return (
        <Row >
            {
                mdata.map((values, i) => {
                    return (
                        <Col sm="3">
                            <Card body outline color="success"
                                style={{

                                    // backgroundColor: '#333',
                                    // borderColor: '#333',
                                    // color:'#fff'
                                    margin: '20px'
                                }}
                            >
                                {
                                    values.url ? <img
                                        alt="Sample"
                                        src="https://picsum.photos/300/200"
                                    /> : null
                                }

                                <CardBody>
                                    <CardTitle tag="h5">
                                        <p>Medicine Name: <b>{values.name}</b> </p>
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        <p>price: <b>{values.price}</b> </p>

                                    </CardSubtitle>
                                    <CardText>
                                        <p>Expiry: <b>{values.expiry}</b> </p>

                                    </CardText>
                                    <CardText style={{ height: '60px', overflow: 'auto' }}>
                                        {values.desc}
                                    </CardText>
                                   <Button style={{backgroundColor:'#198754'}} onClick={() => onhandlecart(values.id)} >ADD TO CART</Button>

                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default MedisineListNR;