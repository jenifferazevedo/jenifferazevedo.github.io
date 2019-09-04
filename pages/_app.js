import App, { Container } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    lightblue: '#9191F8',
    purple:'#6F0A9A',
    yellow:'#F1F107',
    yellow2:'rgba(241, 241, 7, 90%)',
    moldurayellow: 'rgba(241, 241, 7, 68%)',
    pink:'#FF06CD',
    background1: 'linear-gradient(135deg, rgba(145,145,248,0.6) 0%, rgba(111,10,154,0.6) 70%)',
    background2: 'linear-gradient(135deg, rgba(145,145,248,0.5) 0%, rgba(111,10,154,0.5) 70%)',
    backtitles: 'linear-gradient(135deg, rgba(145,145,248,0.8) 0%, rgba(111,10,154,0.8) 70%)',
    backgroundbutton: 'rgba(0, 0, 0, 10%)',
    black: 'black',
    white: 'white',
    purpleblack: '#34263E',
    boxshadowescuro: 'rgba(0, 0, 0, 50%)',
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    )
  }
}