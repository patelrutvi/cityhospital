import React, { useContext } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import Medicinedata from '../../containers/medicines/Medicinedata';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../Context/ThameContext';

function CustomCard({ values, btnval, onclick1, onclick2 }) {
    const theme = useContext(ThemeContext)

    const mayfavdata= useSelector((state) => state.fav)
    console.log(mayfavdata,"custom cart fav");


    return (

        <div  >
            <Card className={`icon ${theme.theme}`} body outline color="success"
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
                {
                    mayfavdata.myfav.some((v,i) => v.pid === values.id) ? 
                     <FavoriteIcon style={{ width: '400px',color:'red' }} onClick={() => onclick2(values.id)} /> 
                    :
                    <FavoriteBorderIcon style={{ width: '400px' }} onClick={() => onclick2(values.id)} />
                }
               
                <CardBody className={`themecustom ${theme.theme}`}>
                  
                        <Link to={'/medicinedata/' + values.id }style={{ color: 'gray' }}>

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
                    </Link>
                    {
                        btnval ? <Button
                            style={{ backgroundColor: 'green' }}
                            onClick={() => onclick1(values.id)}

                        >
                            {btnval}
                        </Button> : null
                    }

                </CardBody>
            </Card>
        </div>
    );
}

export default CustomCard;