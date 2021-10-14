import React from "react";
import { FormContainer, FormInput, FormButton } from "./styles";
import { container } from "./container";
import { RenderResult } from "./RenderResult";
/**
 * LoveCalculator is the main class for us to access the home contents
 * it contains the forms
 * this class maintains the state, using this state only all the child classes are re-rendering
 */
class LoveCalculator extends React.Component {
  state = {
    name: "",
    partnerName: "",
    response: {}
  };
  async fetchData(data) {
    await container.getCalculated(data);
    this.setState({
      response: container.response
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const yourName = event.target[0].value;
    const yourPartnerName = event.target[1].value;
    this.setState({ name: yourName });
    this.setState({ partnerName: yourPartnerName });
    this.fetchData(this.state);
  };
  render() {
    return (
      <>
        <FormContainer onSubmit={this.handleSubmit}>
          <FormInput placeholder={"your name"} />
          <FormInput placeholder={"your partner name"} />
          <FormButton>{"Check"}</FormButton>
        </FormContainer>
        <RenderResult {...this.state} />
      </>
    );
  }
}

export { LoveCalculator };
export default { LoveCalculator };
