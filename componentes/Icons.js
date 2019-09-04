import React from 'react'
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';

const Icone = styled.div`
position: fixed;
z-index: 5;
bottom: 0;
right: 0;
font-size: 3em;
line-height: 0;
padding-right:0.5%;
@media (max-width: 768px) {
    top:0;
}
@media (max-width: 568px) {
    top:0;
    font-size: 2em;
}
div {
    padding: 10% 0%;
    :hover {
    .anticon svg {
    fill: ${({ theme }) => theme.colors.lightblue};
    }
}
}
.anticon svg {
    fill: ${({ theme }) => theme.colors.purple};
}
`


export function Icons(props) {
    return (
        <Icone>
            <div><a href="https://www.linkedin.com/in/jeniffer-de-azevedo-6b567070/" target="_blank"><Icon type={props.social} /></a></div>
            <div><a href="https://github.com/jenifferazevedo" target="_blank"><Icon type={props.social1} /></a></div>
            <div><a href="https://www.behance.net/jenifferazevedo" target="_blank"><Icon type={props.social2} /></a></div>
        </Icone>
    )
}
