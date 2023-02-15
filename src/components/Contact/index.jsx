// Importation react, image, styles

import React from 'react'
import styled from 'styled-components'
import ContactImg from '../../assets/contact-image.webp'
import { fadeIn } from '../../utils/animation'
import resolution from '../../utils/hooks/resolution'

// Définition style image, contour image (css)

const ContactImgDiv = styled.div`
  width: 100%;
  margin: 20px auto;
  height: 223px;
  animation: ${fadeIn} 1s ease-in-out;
`

const ContactDivImg = styled.img`
  background-blend-mode: darken;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
  border-radius: 10px;
`

const ContactText = styled.p`
  position: absolute;
  left: 9.6%;
  right: 32.53%;
  top: 10%;
  bottom: 80.05%;
  font-weight: 500;
  font-size: 24px;
  color: white;
  width: 80%;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 40px;
  }
`

const ContactTextLg = styled.p`
  
  @media only screen and (min-width: ${resolution.medium}) {
    display: none;
    display: inline;
    position: absolute;
    left: 9.6%;
    right: 32.53%;
    top: 10%;
    bottom: 80.05%;
    font-weight: 500;
    font-size: 24px;
    color: white;
    width: 80%;
  }
  @media only screen and (min-width: ${resolution.large}) {
    left: 0%;
    top: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    display: none;
  }
`

// Appel "const" AboutPicture avec les éléments de la section de la page (image)

const ContactImage = () => {
  return (
    <ContactImgDiv>
      <ContactDivImg src={ContactImg} />
      <ContactText>
      Contact
      </ContactText>
      <ContactTextLg>Contact</ContactTextLg>
    </ContactImgDiv>
  )
}

export default ContactImage