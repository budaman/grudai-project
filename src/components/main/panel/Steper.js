import React, { Component } from "react";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";

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
        return "VYKSTA GRŪDŲ TIKRINIMAS";
      case 2:
        return "Vyksta kainos nustatymas ir pinigų išmokėjimas";
      default:
        return "Visos pirkimo operacijos yra baigtos. Pinigai bus išmokėti į jūsų saskaitą.";
    }
  }

  render() {
    const style = {
      display: "none"
    };
    const { stepIndex } = this.state;
    const contentStyle = { margin: "0 20px" };

    return (
      <div style={{ width: "100%", maxWidth: 550, margin: "auto" }}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel style={{ fontSize: 13 }} className={style}>
              Grūdų pridavimas
            </StepLabel>
          </Step>
          <Step>
            <StepLabel style={{ fontSize: 13 }}>Grūdų tikrinimas</StepLabel>
          </Step>
          <Step>
            <StepLabel style={{ fontSize: 13 }}>Pinigų išmokėjimas</StepLabel>
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
