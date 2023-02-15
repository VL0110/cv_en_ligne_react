// Importation des éléments de la page (header,footer,card,picture) et des caractéristiques de mise en page 

import Footer from '../../components/Footer'
import Header from '../../components/Header/index'
import styled from 'styled-components'
import resolution from '../../utils/hooks/resolution'
import Banner from '../../components/Banner'
import Cv from '../../components/Cv'
import Lm from '../../components/Lm'
import { useEffect } from "react";

// Style du corps de page (css)

const Main = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  padding-bottom: 200px;
  display: flex;
  flex-direction: flex;
  @media screen and (min-width: 300px) and (max-width: 500px)  {
  flex-direction: column;
  }
`



// Création fonction Home avec les éléments de la page (header,main,picture,card(logements.json),footer)

function Home() {
  useEffect(() => {
	}, )
  return (
    <div>
      <Header />
      <Banner />
      <Main>
        <Cv />
        <Lm />
      </Main>
      <Footer />
    </div>
  )
}

export default Home

