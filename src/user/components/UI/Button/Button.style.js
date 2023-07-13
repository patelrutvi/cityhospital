import { styled } from "styled-components";
const Basebutton = styled.button`
    padding: 10px 30px;
    border-radius: 50px;
    transition:0.4s;
    border:0;
    margin: 8px 0 8px 20px;
    
`;

export const primaryButton = styled(Basebutton)`
    color: #fff;
    background:${props => props.disabled ? 'gray' : '#ff6337' };
   

    &:hover{
        background: ${props => props.disabled ? 'gray' : '#166ab5' };
        }
`;
export const secondaryButton = styled(Basebutton)`
    color: #fff;
    background-color: #ff6337;

    &:hover{
        background-color: red;
        }
`;
export const outlinedButton = styled(Basebutton)`
    color: #000
    ;
    border:1px solid black;

    &:hover{
        background-color: #166ab5;
        }
`;