import React from 'react'
import resolution from '../../utils/hooks/resolution'
import { fadeIn } from '../../utils/animation'
import styled from 'styled-components'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom & Prénom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Sujet :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Message:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }


  const FormulaireDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;
  height: 111px;
  border-radius: 10px;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
  @media only screen and (min-width: ${resolution.large}) {
    height: 223px;
  }
`

  const Formulaire = () => {
    return (
      <FormulaireDiv>
      <NameForm />
      </FormulaireDiv>
    )
  }
  
  export default Formulaire