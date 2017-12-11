import React, { Component } from "react";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

class Steper extends Component {
  state = {
    finished: false,
    stepIndex: 1
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return "Šiuo metu laukiama kada bus priduoti grūdai";
      case 1:
        return "Vyksta grūdų tikrinimas";
      case 2:
        return "Vyksta kainos nustatymas ir pinigų išmokėjimas";
      default:
        return "Visos pirkimo operacijos yra baigtos. Pinigai bus išmokėti į jūsų saskaitą.";
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: "0 20px" };

    return (
      <div style={{ width: "100%", maxWidth: 700, margin: "auto" }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Grūdų pridavimas</StepLabel>
          </Step>
          <Step>
            <StepLabel>Grūdų tikrinimas</StepLabel>
          </Step>
          <Step>
            <StepLabel>Pinigų išmokėjimas</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <div>
            <p className="status-bar-label">{this.getStepContent(stepIndex)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Steper;
