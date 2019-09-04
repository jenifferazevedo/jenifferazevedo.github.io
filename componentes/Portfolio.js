import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import {PalavraAzul} from './Texts';


const MolduraPort = styled.div`
width: 85%;
height: 20vh;
border-radius: 5px;
background: ${({ theme }) => theme.colors.white};
overflow: hidden;
margin-top: ${props => props.margintop};
margin-left: ${props => props.marginleft};
img {
    width: auto;
    height: 100%;
    margin-left: ${props => props.marginleftimg};
}
:hover {
    box-shadow: 0px 0px 5px 1px ${({theme}) => theme.colors.boxshadowescuro};
}
@media (max-width: 768px) {
    height: 100px;
    z-index: 3;
    margin-top: 10%;
    img {
    width: auto;
    height: 100%;
    margin-left: ${props => props.marginleftimg};
    }
}
@media (max-width: 568px) {
    height: 80px;
    z-index: 3;
    margin-top: 10%;
    background: ${({theme}) => theme.colors.purple};
    img {
    width: auto;
    height: 100%;
    margin-left: ${props => props.marginleftimg};
    }
}
`
const Carouselcard = styled.div`
width: 90%;
height: 60vh;
margin-top: 10%;
margin-left: 10%;
border-radius: 10px;
overflow: hidden;
img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
}
@media (max-width: 768px) {
    margin-top: 0;
    width: 90%;
    height: 300px;
    img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
    }
}
@media (max-width: 568px) {
    height: 220px;
    img {
    height:100%;
    width: auto;
    border-radius: 10px;
    margin-left: -15%;
    }
}
`
const Links =styled.h2`
padding-left: 10%;
padding-top: 2.5%;
font-size: 1.5vw;
color: ${({theme}) => theme.colors.yellow};
a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.yellow};
}
`
const Base = "../static/Cantinhodasflores.png"

const Github = "https://github.com/jenifferazevedo"

export function Portfolio(props) {
    const [photo, setPhoto] = useState("")
    const [link, setLink] = useState("")

    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col lg={12} md={22} sm={22} xs={22}>
                        <Row>
                            <Col span={8}>
                                <MolduraPort marginleft="25%" margintop="30%" marginleftimg="-30%" onClick={() => setPhoto("../static/Cantinhodasflores.png") & setLink("https://youthful-ptolemy-a12c07.netlify.com/#formulariodecadastro")} >
                                    <img src="..\static\Cantinhodasflores.png" />
                                </MolduraPort>
                            </Col>
                            <Col span={8}>
                                <MolduraPort marginleft="20%" margintop="30%" marginleftimg="-30%" onClick={() => setPhoto("../static/Pokedex.png") & setLink("https://pokedexjeniffer.herokuapp.com/")}>
                                    <img src="..\static\Pokedex.png" />
                                </MolduraPort>
                            </Col>
                            <Col span={8}>
                                <MolduraPort marginleft="15%" margintop="30%" marginleftimg="-30%" onClick={() => setPhoto("../static/Dashboard.jpg") & setLink("https://github.com/jenifferazevedo/Dashboard_Ui")}>
                                    <img src="..\static\Dashboard.jpg" />
                                </MolduraPort>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>
                                <MolduraPort marginleft="25%" margintop="10%" marginleftimg="0%" onClick={() => setPhoto("../static/Graphic.jpg") & setLink("https://www.behance.net/jenifferazevedo")}>
                                    <img src="..\static\Graphic.jpg" />
                                </MolduraPort>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <PalavraAzul word1="Em construção..."/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} md={22} sm={22} xs={22}>
                        <Carouselcard >
                            <img src={photo || Base}/>
                        </Carouselcard>
                        <Links><a href={link || Github} target="_blank">Veja o projeto! Clique aqui.</a></Links>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}