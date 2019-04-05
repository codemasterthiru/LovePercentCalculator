import React from "react";

/***
 * LoveMeter is a container class component, which helps to maintain the states commonly
 */
class LoveMeter extends React.Component {
  componentWillMount() {
    this.response = {};
  }
  urlConstructing = data => {
    return `https://love-calculator.p.rapidapi.com/getPercentage?fname=${
      data.name
    }&sname=${data.partnerName}`;
  };
  getCalculated = async data => {
    const url = this.urlConstructing(data);
    const response = await fetch(url, {
      headers: {
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        "X-RapidAPI-Key": "39f62dbd37msh087bb563e886383p190e72jsnbfa63ff2c64b"
      }
    }).then(
      function(response) {
        return response.json();
      },
      function(error) {
        error.message;
      }
    );
    this.response = response;
  };
}

/**
 * creating an instance to use the lovemeter class as constructor
 */
const container = new LoveMeter();

export { container };
export default { container };
