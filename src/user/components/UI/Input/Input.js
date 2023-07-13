import React from 'react';
import { StyledInput } from './input.style';


function Input({errorText,...rest }) {
    return (
                <StyledInput errorText={errorText} {...rest} />
    );
}

export default Input;