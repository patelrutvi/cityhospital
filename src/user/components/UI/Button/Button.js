import React from 'react';
import {LinearButton, OutlinedButton, PrimaryButton, SecendoryButton, StyledButton} from './Button.style';

function Button({children , type , btnDisabled=false}) {
 
  const customButtontype = () => {
      switch(type){
          case 'primary' :
            return PrimaryButton ;
          case 'secendory':
            return SecendoryButton ;
          case 'outlined':
            return OutlinedButton ; 
          case 'linear':
            return LinearButton ;
            default :
            return PrimaryButton;
      }
  }

  const CustomButton = customButtontype()
  return (
        <CustomButton disabled={btnDisabled}>
          {children}
        </CustomButton>

  );
}

export default Button;