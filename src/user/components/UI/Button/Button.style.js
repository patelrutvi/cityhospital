import { styled } from "styled-components";


const StyledButton = styled.button`

  border: 0;
  padding: 10px 35px;
  margin:10px;
  transition: 0.4s;
  border-radius: 50px;
 
`;

export const PrimaryButton = styled(StyledButton)`
    color: #fff;
    background: ${props => props.disabled ? 'grey' : '#ff6337'} ;

    &:hover{
    background : ${props => props.disabled ? 'grey' : '#166ab5'} ; 
    color: #fff;
  }
`;

export const SecendoryButton = styled(StyledButton)`
    color: #fff;
    background: #ff3476;

    &:hover{
    background: #000;
    color: #fff;
  }
`;

export const OutlinedButton = styled(StyledButton)`
    color: #ff6337;
    background: none;
    border: 2px solid #ff6337;

    &:hover{
    background: #ff6337;
    color: #fff;
  }
`;

export const LinearButton = styled(StyledButton)`
    color: #ff6337;
    background:linear-gradient(to left red, orange , yellow , green , blue );
    border: 2px solid #ff6337;

    &:hover{
    background: #ff6337;
    color: #fff;
  }
`;