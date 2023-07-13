import { styled } from "styled-components";

export const StyledInput = styled.input`
    border:${props => props.errorText !== '' ? '1px solid red' : '1px solid grey'};
`;





// height: 44px;
// font-size: 14px;
// padding: 10px !important;
// width: 100%;
// font-weight: 400;
// line-height: 1.5;
// justify-content: center;
// outline: none;
// border:1px solid lightgray;
// margin:5px;

// &:focus{
//     display:inline-block;
//     border:1px solid #FF6337;
// }
// &:blur{
//     display:inline-block;
//     border:1px solid green;
// }




