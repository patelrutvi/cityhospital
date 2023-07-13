import React from 'react';
import { Divcompo } from './div.style';

function Divv({children}) {
    return (
        <Divcompo  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" >
        {children}

       </Divcompo>
    );
}

export default Divv;