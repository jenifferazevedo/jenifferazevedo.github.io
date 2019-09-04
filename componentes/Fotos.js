import React from 'react'
import styled from 'styled-components';
import { Row, Col } from 'antd';

const Photo = styled.div`
width: 100%;
height: 100vh;
position: relative;
z-index: 1;
padding-top: ${props => props.top};
padding-left: ${props => props.left};
@media (max-width: 768px) {
    height:300px;
}
@media (max-width: 568px) {
    padding-top: 10%;
    padding-left: 30%;
    width: 250px;
    height: 300px;
}
`
const PhotoRet = styled.div`
width: 100%;
height: 100vh;
position: relative;
z-index: 1;
padding-top: ${props => props.top};
padding-left: ${props => props.left};
@media (max-width: 768px) {
    height:500px;
    padding-top: 20%;
}
@media (max-width: 568px) {
    height: 50vh;
    padding-top: 0%;
}
`
const MolduraRedonda1 = styled.div`
width: 60%;
height: 50%;
background-color: ${({ theme }) => theme.colors.pink}; 
border-radius: 100%;
position: absolute;
opacity: 80%;
z-index: 2;
`
const MolduraRedonda2 = styled.div`
width: 60%;
height: 50%;
background-color: ${({ theme }) => theme.colors.moldurayellow}; 
border-radius: 100%;
position: absolute;
margin-left: 10%;
opacity: 80%;
z-index: 3;
`
const MolduraRedonda3 = styled.div`
width: 60%;
height: 50%;
background-color: ${({ theme }) => theme.colors.lightblue}; 
border-radius: 100%;
position: absolute;
margin-top: 10%;
`
const MolduraRedonda4 = styled.div`
width: 60%;
height: 50%;
background-color:${({theme}) => theme.colors.purple};
border-radius: 100%;
position: absolute;
margin-top: 10%;
margin-left: 10%;
`
const Moldurafoto = styled.div`
width: 60%;
height: 50%;
border-radius: 100%;
position: absolute;
overflow: hidden;
margin-top: 5%;
margin-left: 5%;
z-index: 4;
img{
    width: 100%;
    height: 105%;
}
`
const MolduraRet1 = styled.div`
width: 50%;
height: 70%;
background-color: ${({ theme }) => theme.colors.pink}; 
position: absolute;
opacity: 80%;
z-index: 2;
margin-top: 7.5%;
margin-left: 5%;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`
const MolduraRet2 = styled.div`
width: 50%;
height: 70%;
background-color: ${({ theme }) => theme.colors.moldurayellow}; 
position: absolute;
margin-left: 7.5%;
opacity: 80%;
z-index: 3;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`
const MolduraRet3 = styled.div`
width: 50%;
height: 70%;
background-color: ${({ theme }) => theme.colors.lightblue}; 
position: absolute;
margin-top: 10%;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`
const MolduraRet4 = styled.div`
width: 50%;
height: 70%;
background-color:${({theme}) => theme.colors.purple};
position: absolute;
margin-top: 2.5%;
margin-left: 2.5%;
@media (max-width: 568px) {
    width: 35%;
    height: 50%;
}
`
const Molduraimagemret = styled.div`
width: 50%;
height: 70%;
position: absolute;
overflow: hidden;
margin-top: 5%;
margin-left: 5%;
z-index: 4;
img{
    height: 100%;
}
@media (max-width: 568px) {
    height: 50%;
}
`

export function FotoPerfil(props) {
    return (
        <Photo top="20%" left="15%">
            <MolduraRedonda1 />
            <MolduraRedonda2 />
            <MolduraRedonda3 />
            <MolduraRedonda4 />
            <Moldurafoto><img src=".\static\0.jpg" alt="myimageperfil" /></Moldurafoto>
        </Photo>
    )
}

export function Imagemretangular(props) {
    return (
        <PhotoRet top="10%" left="30%">
            <MolduraRet1 />
            <MolduraRet2 />
            <MolduraRet3 />
            <MolduraRet4 />
            <Molduraimagemret><img src=".\static\developer_meme.jpg" alt="meme" /></Molduraimagemret>
        </PhotoRet>
    )
}

