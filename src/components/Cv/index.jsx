// Importation link, styles

import styled from 'styled-components'
import CvImg from '../../assets/cv-image.png'
import { fadeIn, translate } from '../../utils/animation'
import resolution from '../../utils/hooks/resolution'

// Définition style card, image, texte, media only (tel)

const CvImgDiv = styled.div`
  list-style: none;
  width: 95%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  margin: 15px auto;
  transition: transform 0.5s ease-in-out;
  animation: ${fadeIn} 1s ease-in-out, ${translate} 1.5s ease-in-out;
  @media only screen and (min-width: ${resolution.medium}) {
    width: 90%;
    margin: 20px auto;
  }
  &:hover {
    transform: scale(1.03);
    & img {
      filter: brightness(100%);
    }
  }
`

const CvaboutImg = styled.img`
  background-blend-mode: darken;
  width: 95%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
  border-radius: 10px;
`

// Appel "const" CardLink avec les éléments de la section de la page (card,logement,title)

const CvImage = () => {
  return (
    <CvImgDiv>
      <CvaboutImg src={CvImg} />
    </CvImgDiv>
  )
}

export default CvImage
