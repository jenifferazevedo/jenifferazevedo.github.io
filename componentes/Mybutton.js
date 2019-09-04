import React from 'react';
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';

const Primarybutton = styled.button`
width: 15%;
font-size: 2em;
margin-left: 42.5%;
margin-right: 42.5%;
margin-top: 2%;
text-align: center;
font-family: 'Arial Narrow';
text-transform: uppercase;
color: ${({ theme }) => theme.colors.white};
border: 4px solid ${({ theme }) => theme.colors.white};
border-radius: 5px;
background: none;
display:  ${props => props.click ? 'none' : 'block'};
transition: display 1s;
:hover{
    border-color: ${({ theme }) => theme.colors.yellow2};
    background: ${({ theme }) => theme.colors.backgroundbutton};
    box-shadow: 0px 0px 4px 2px  ${({ theme }) => theme.colors.boxshadowescuro};
}
`
const Morebutton = styled.button`
width: 25%;
font-size: 1em;
text-align: center;
background-color: ${({ theme }) => theme.colors.lightblue};
border: 3px solid ${({ theme }) => theme.colors.white};
border-radius: 5px;
padding: 1%;
position: absolute;
right: 0;
h4{
    font-size: 1vw;
    padding: 0%;
    margin: 0%;
    color: ${({ theme }) => theme.colors.white};
}
:hover{
    border-color: ${({ theme }) => theme.colors.yellow2};
    background: ${({ theme }) => theme.colors.backgroundbutton};
    box-shadow: 0px 0px 10px 1px  ${({ theme }) => theme.colors.boxshadowescuro};
    h4 {
        color: ${({ theme }) => theme.colors.yellow2};
    }
}
`

export function Vejamais(props) {
    return (
        <Morebutton>
            <h4>{props.buttontext}</h4>
        </Morebutton>
    )
}
