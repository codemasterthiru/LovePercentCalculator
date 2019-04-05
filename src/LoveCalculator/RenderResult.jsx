import React from "react";
import { Result } from "./styles";
import { ProgressBar } from "./ProgressBar";

/**
 * renderresult is used to render the result page after the successful response
 * it contains the progress bar and result text
 */
class RenderResult extends React.Component {
  resultTextColorFinder = data => {
    if (parseInt(data) < 40) return "#f90800";
    else if (parseInt(data) < 75) return "#bab535";
    else return "#4caf50";
  };
  render() {
    const { percentage, result } = this.props.response;
    const isTrue = percentage && result;
    const passColor = this.resultTextColorFinder(percentage);
    return (
      <>
        {isTrue && <ProgressBar percentage={percentage} />}
        {isTrue && <Result passColor={passColor}>{result}</Result>}
      </>
    );
  }
}

export { RenderResult };
export default { RenderResult };
