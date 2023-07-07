import { styled } from "styled-components";

const Input = styled.input`
height: 44px;
border-radius: 0;
box-shadow: none;
font-size: 14px;
padding: 10px !important;
display: block;
width: 100%;

&:focus{
    border-color: green;
}
`;