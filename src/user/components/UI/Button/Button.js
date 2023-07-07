import React from 'react';
import { Basebutton, outlinedButton, primaryButton, secondaryButton } from './Button.style';

function Button({ children, type ,btnDisable=false}) {
    console.log(type);
    const coustumButton = () => {
        switch (type) {
            case 'primary':
                return primaryButton;
            case 'secondary':
                return secondaryButton;
            case 'outlined' :
                return outlinedButton;
            default :
            return primaryButton;
            
        }
    }

    const CostomButtoncall = coustumButton()

    return (
        <CostomButtoncall disabled={btnDisable} >
            {children}
        </CostomButtoncall>
    );
}

export default Button;