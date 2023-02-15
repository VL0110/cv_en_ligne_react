// Importation des éléments de la page et du style

import Header from '../../components/Header'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import resolution from '../../utils/hooks/resolution'
import ContactImage from '../../components/Contact/index'
import NameForm from '../../components/Contact/formulaire'
import { useEffect } from "react";


// Définition style main

const Main = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  padding-bottom: 200px;
`

// Appel "const" About avec les éléments de la page (header,main,picture,dropdown,collapses,footer)

const Contact = () => {
  useEffect(() => {
		document.title = `About`
	}, )
  return (
    <div>
      <Header />
      <Main>
        <ContactImage />
        <NameForm />
      </Main>
      <Footer />
    </div>
  )
}

export default Contact
