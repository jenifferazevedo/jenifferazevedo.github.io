import React from 'react'
import styled from 'styled-components';
import { Row, Col } from 'antd';

const FirstTitle = styled.h1`
font-size: ${props => props.size};
color: ${({ theme }) => theme.colors.white};
text-align: ${props => props.align};
text-transform: uppercase;
font-family: 'Arial Narrow';
padding-top: ${props => props.top};
margin-bottom: 0px;
@media (max-width: 768px) {
   padding-top: 5%;
   font-size: ${props => props.sizemediatablet}
}
@media (max-width: 568px) {
    padding-left: ${props => props.leftmediamobile};
    padding-top: ${props => props.topmediamobile};
    font-size: ${props => props.sizemediamobile}
}
`
const SecondTitle = styled.h2`
font-size: 3vw;
color: ${({ theme }) => theme.colors.white};
text-align: left;
text-transform:uppercase;
font-family: 'Arial Narrow';
margin-bottom: 1%;
span {
    font-size: 2.5vw;
}
@media (max-width: 568px) {
    padding-left: 10%;
    padding-top: 0;
    font-size: 4.5vw;
    span{
        font-size: 3vw;
    }
}
`
const Text1 = styled.p`
font-size: 1.8vw;
color: ${({ theme }) => theme.colors.white};
text-align: left;
text-transform: initial;
font-family: 'Helvetica';
padding-top: 4%;
@media (max-width: 568px) {
    padding-left: 10%;
    padding-top: 10%;
    font-size: 4vw;
}
`
const Text2 = styled.p`
font-size: ${props => props.size};
color: ${({ theme }) => theme.colors.purpleblack};
line-height: 1.7;
text-align: justify;
text-transform: initial;
font-family: 'Helvetica';
padding-top: ${props => props.top};
padding-left: 10%;
@media (max-width: 768px) {
   font-size: ${props => props.sizemediatablet};
}
@media (max-width: 568px) {
    font-size: ${props => props.sizemediamobile};
    padding-top: 5%;
}
`
const Titles =styled.div`
width: 60%;
font-size: 3vw;
color: ${({ theme }) => theme.colors.white};
background: ${({ theme }) => theme.colors.backtitles};
text-align: center;
text-transform: uppercase;
font-family: 'Arial Narrow';
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
margin-top: 5%;
@media (max-width: 568px) {
    font-size: 5vw;
}
`
const Palavraazul =styled.p`
font-size: ${props => props.size};
color: ${({ theme }) => theme.colors.lightblue};
text-align: left;
text-transform: uppercase;
font-family: 'Courier';
padding-top: 12.5%;
padding-left: ${props => props.left};
margin:0;
line-height: 0.8;
@media (max-width: 768px) {
   padding-top: 20%;
}
@media (max-width: 568px) {
    padding-top: 5%;
    padding-left: 30%;
}
`
const Palavraroxa =styled.p`
font-size: ${props => props.size};
color: ${({ theme }) => theme.colors.purple};
text-align: left;
text-transform: uppercase;
font-family: 'Courier';
padding-left: ${props => props.left};
margin:0;
line-height: 1;
@media (max-width: 568px) {
    padding-left: 50%;
}
`
const Palavraamarela =styled.p`
font-size: ${props => props.size};
color: ${({ theme }) => theme.colors.yellow};
text-align: ${props => props.align};
text-transform: uppercase;
font-family: 'Courier';
padding-left: ${props => props.left};
padding-top: ${props => props.top};
margin:0;
line-height: 1;
@media (max-width: 568px) {
    padding-left: 30%;
}
`
const Palavrarosa =styled.p`
font-size: ${props => props.size};
color: ${({ theme }) => theme.colors.pink};
text-align: left;
text-transform: uppercase;
font-family: 'Courier';
padding-left: ${props => props.left};
margin:0;
line-height: 1;
@media (max-width: 568px) {
    padding-left: 50%;
}
`

export function Firstsectiontext(props) {
    return (
        <div>
            <FirstTitle sizemediatablet={props.tablettextsize} sizemediamobile={props.mobilesize} topmediamobile="0%" leftmediamobile="10%" align="left" top="10%" size="4.5vw">{props.firsttitle}</FirstTitle>
            <SecondTitle><span>by:</span>{props.secondtitle}</SecondTitle>
        </div>
    )
}

export function Subtitles(props) {
    return (
        <div>
             <FirstTitle sizemediatablet={props.tablettextsize} sizemediamobile={props.mobilesize} topmediamobile="5%" leftmediamobile="0%" align="center" top="3%" size={props.fontsize}>{props.firsttitle}<br />{props.secondtitle}</FirstTitle>
        </div>
    )
}

export function Textperfil(props) {
    return (
        <div>
            <Text1>{props.textp1}<br />{props.textp2}</Text1>
        </div>
    )
}


export function Texto(props) {
    return (
        <div>
            <Text2 top={props.paddingTop} size={props.fontsize} sizemediatablet={props.tablettextsize} sizemediamobile={props.mobilesize} >{props.textp1}<br />{props.textp2}<br />{props.textp3}<br />{props.textp4}<br />{props.textp5}</Text2>
        </div>
    )
}

export function Texttitles(props) {
    return (
        <div>
            <Titles>{props.title}</Titles>
        </div>
    )
}

export function PalavrasColoridas(props) {
    return (
        <div>
            <Palavraazul size="5vw" left="10%">{props.word1}</Palavraazul><br/>
            <Palavraroxa size="5.3vw" left="25%">{props.word2}</Palavraroxa><br/>
            <Palavraamarela size="5.8vw" left="10%">{props.word3}</Palavraamarela><br />
            <Palavrarosa size="6.2vw" left="25%">{props.word4}</Palavrarosa>
        </div>
    )
}

export function PalavraAzul(props) {
    return (
        <div>
            <Palavraamarela size="2.5vw" align="right" top="5%">{props.word1}</Palavraamarela><br/>
        </div>
    )
}