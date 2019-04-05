/**
 * importing sytled component, before that we need to add styled component dependency in package.json
 * using this import we can make use of html tags here
 */
import styled from "styled-components";

const FormContainer = styled.form`
  width: 320px;
  margin: 0 auto;
`;
const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid green;
  border-radius: 10px;
  height: 20px;
`;
const FormButton = styled.button`
  padding: 10px;
  width: 100px;
  height: 40px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  -webkit-appearance: none;
  border: 1px solid green;
  background: greenyellow;
  font-size: 18px;
  color: red;
  font-weight: bold;
`;
const Result = styled.div`
  color: ${props => props.passColor};
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  margin: 10px 0px;
`;
const MyProgressBar = styled.div`
  width: 100%;
  background-color: #ddd;
`;
const MyBarInside = styled.div`
  width: ${props => props.percentage}%;
  margin: 10px 0px;
  height: 30px;
  background-color: ${props => props.barColor};
  text-align: center;
  line-height: 30px;
  color: white;
`;

export {
  FormContainer,
  FormInput,
  FormButton,
  Result,
  MyProgressBar,
  MyBarInside
};
