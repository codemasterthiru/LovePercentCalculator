import React from "react";
import { MyProgressBar, MyBarInside } from "./styles";
/**
 * progressbar is used to render the progress bar for the percentage from the response
 */
class ProgressBar extends React.Component {
  findProgressBarColor = data => {
    if (parseInt(data) < 40) return "#f90800";
    else if (parseInt(data) < 75) return "#bab535";
    else return "#4caf50";
  };
  render() {
    const { percentage } = this.props;
    const barColor = this.findProgressBarColor(percentage);
    return (
      <MyProgressBar>
        <MyBarInside percentage={percentage} barColor={barColor}>
          {percentage} %
        </MyBarInside>
      </MyProgressBar>
    );
  }
}

export { ProgressBar };
export default { ProgressBar };
