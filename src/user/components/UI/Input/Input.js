import React from 'react';
import { StyledInput } from './input.style';



function Input({ children, type, placeholder }) {
    return (

                <StyledInput type={type} placeholder={placeholder}>
                    {children}
                </StyledInput>

                
    );
}

export default Input;