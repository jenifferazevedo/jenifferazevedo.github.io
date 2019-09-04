import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import {Firstsectiontext, Subtitles, Textperfil, Texttitles, PalavrasColoridas, Texto} from './Texts';
import {Vejamais} from './Mybutton';
import {FotoPerfil, Imagemretangular} from './Fotos';
import {Icons} from './Icons';
import {Portfolio} from './Portfolio'

const Background1 = styled.div`
width: 100%;
`
const Sectiongradiente = styled.div`
width: 100%;
height: 100vh;
background: ${({ theme }) => theme.colors.background1};
overflow: hidden;
@media (max-width: 768px) {
    height: 300px;
}
@media (max-width: 568px) {
    height: 768px;
}
`
const Sectiongradiente1 = styled.div`
width: 100%;
height: 100vh;
background: ${({ theme }) => theme.colors.background2};
overflow: hidden;
@media (max-width: 768px) {
    height: 768px;
}
@media (max-width: 568px) {
    height: 550px;
}
`
const Sectionywhite = styled.div`
width: 100%;
height: 100vh;
background: ${({ theme }) => theme.colors.white};
overflow: hidden;
@media (max-width: 768px) {
    height: 520px;
}
@media (max-width: 568px) {
    height: 720px;
}
`
const Sectionpurple = styled.div`
width: 100%;
height: 20vh;
background: ${({ theme }) => theme.colors.lightblue};
overflow: hidden;
@media (max-width: 768px) {
    height: 120px;
}
@media (max-width: 568px) {
    height: 80px;
}
`
const Detalhetext =styled.div`
width: 40%;
height: 0.5vh;
background-color: ${({theme}) => theme.colors.lightblue};
margin-left: ${props => props.left};
@media (max-width: 568px) {
    margin-left: ${props => props.leftmobile}
}
`

export default function Page(props) {
    const [state, setState] = useState(false);

    return (
        <Background1>
            <Row>
                <Sectiongradiente>
                    <Col lg={9} md={8}>
                        <FotoPerfil />
                    </Col>
                    <Col lg={13} md={14} sm={22} xs={20}>
                        <Row>
                        <Firstsectiontext tablettextsize="5vw" mobilesize="7.5vw" firsttitle="jeniffer de azevedo" secondtitle="web designer & front-end"/>
                        <Detalhetext leftmobile="10%"/>
                        </Row>
                        <Row>
                        <Textperfil textp1="Olá! Meu nome é Jeniffer.  Amo a tecnologia e o design!" textp2="Tenho experiencia e conhecimento em: 
                        Photoshop, Illustrator, Adobe XD, GitHub, HTML, CSS, Bootstrap, Javascript, React.js, Next.js. 
                        Estou sempre a aprender e me atualizar nas novas tecnologias para melhorar cada projeto!" />
                        </Row>
                    </Col>
                    <Col lg={2} md={2}>
                        <Icons social="linkedin" social1="github" social2="behance"/>
                    </Col>
                </Sectiongradiente>
                <Sectionywhite>
                    <Col lg={11} md={11} sm={20} xs={20}>
                        <Texttitles title="mais sobre mim"/>
                        <PalavrasColoridas word1="design" word2="psicologia" word3="web design" word4="front-end" />
                    </Col>
                    <Col lg={11} md={11} sm={20} xs={20}>
                        <Texto tablettextsize="1.8vw" mobilesize="3.2vw" paddingTop="15%" fontsize="1.4vw" textp1="Sou brasileira/portuguesa, tenho 25 anos, casada, natural do Rio de Janeiro/Brasil, mas atualmente minha morada é
                         em Vila Nova de Gaia/ Porto. Desde a adolescência eu amo desenhar e usar o computador, então comecei a trabalhar com Design Gráfico 
                         para ajudar na empresa da minha família no Brasil. Por mais que amasse a área, não havia muitas oportunidades na cidade onde morava, 
                         então continuei os estudos em Psicologia, que exerci durante alguns anos." 
                         textp2="No entanto, por não estar satisfeita e tendo mais experiencia decidi voltar à área de Design. Fiz um curso para me atualizar,
                         mas acabei por me redescobrir na arte da Tatuagem e do Web Design. Segui para outros cursos de Front-end developer, e continuei a 
                         estudar Tatuagem como um hobbie. A cada novo conhecimento, eu vejo mais um desafio que me motiva a continuar e a me aprimorar sempre!" />
                    </Col>
                </Sectionywhite>
                <Sectiongradiente1>
                    <Subtitles firsttitle="alguns trabalhos recentes" fontsize="3vw" mobilesize="4vw"/>
                    <Detalhetext left="30%" leftmobile="30%"/>
                    <Row>
                        <Col lg={22}>
                            <Portfolio />
                        </Col>
                    </Row>
                </Sectiongradiente1>
                <Sectionywhite>
                <Col lg={11} md={12} sm={22} xs={20}>
                        <Row>
                            <Texttitles title="autocriticas"/>
                        </Row>
                        <Row>
                        <Texto tablettextsize="1.6vw" paddingTop="5%" fontsize="1.2vw" mobilesize="3vw" textp1='Sou perfeccionista ao ponto de não conseguir parar um projeto ou começar outra tarefa antes de achar que está tudo 
                        "perfeito". Depois de dois anos de terapia consegui melhorar isso e hoje virou uma "intensa persistência" (ok, as vezes ainda sonho 
                        com projetos que não estão do meu jeito)' textp2='Tendo a pensar sempre de um jeito mais complicado, o que pode me fazer não chegar a 
                        uma solução. O lado positivo é que depois considero os benefícios entre os tipos de soluções e escolho com base na qualidade.
                        As vezes dou "bug" e fico olhando para o nada, se me ver olhando para você e eu não responder, provavelmente é um desses momentos, 
                        não se assuste... estou apenas reiniciando.' textp3="Quando estou relaxada no ambiente de trabalho, posso falar muito... realmente muito 
                        (quando não estou focada em uma tarefa), sou simplesmente extrovertida." textp4="Posso ficar frustrada algumas vezes, seja trabalhando 
                        sozinha ou em grupo... me dê um espaço de 5 minutos e volto a ser um amor de pessoa." textp5="Estou sempre a melhorar minhas atitudes em 
                        todos os aspectos da minha vida, assim como a tecnologia!" />
                        </Row>
                    </Col>
                    <Col lg={11} md={10} sm={22} xs={22}>
                        <Imagemretangular />
                    </Col>
                </Sectionywhite>
                <Sectionpurple>
                    <Subtitles tablettextsize="2vw" mobilesize="3.5vw" firsttitle="JENIFFER DE AZEVEDO, VILA NOVA DE GAIA - PORTUGAL" secondtitle="+351 930 516 249  //  JENIQF@GMAIL.COM" fontsize="1.2vw"/>
                </Sectionpurple>
            </Row>
        </Background1>
    )
}
