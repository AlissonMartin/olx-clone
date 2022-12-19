import React from 'react'
import { FooterContainer, Socials } from './FooterElements'
import  facebookLogo  from '../../assets/49354.png'
import  instagramLogo  from '../../assets/87390.png'
import  twitterLogo  from '../../assets/733635.png'

const Footer = () => {
  return (
    <FooterContainer>
      All rights reserved <br />Olhos Inc.
      <Socials>
        <img src={facebookLogo} alt="" />
        <img src={twitterLogo} alt="" />
        <img src={instagramLogo} alt="" />
      </Socials>
    </FooterContainer>
  )
}

export default Footer