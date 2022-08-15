import { React, useState } from "react";
import "./Stepper.css";
import { Stepper, Step, StepLabel } from "@mui/material";
import Info from "../Data/info";
import Card from "./Card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const MyStepper = () => {
  const [showCard, setShowCard] = useState(false);
  const { activeStep } = Info;
  return (
    <div className="stepper-body">
      <Stepper alternativeLabel activeStep={activeStep}>
        <Step>
          <StepLabel
            onMouseDown={() => activeStep === 0 && setShowCard(true)}
            onMouseUp={() => activeStep === 0 && setShowCard(false)}
            icon={
              activeStep > 0 ? (
                <CheckCircleIcon color="success" />
              ) : activeStep === 0 ? (
                <WatchLaterIcon color="warning" />
              ) : (
                <RemoveCircleOutlineIcon />
              )
            }
          >
            Telephonic round
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            onMouseDown={() => activeStep === 1 && setShowCard(true)}
            onMouseUp={() => activeStep === 1 && setShowCard(false)}
            icon={
              activeStep > 1 ? (
                <CheckCircleIcon color="success" />
              ) : activeStep === 1 ? (
                <WatchLaterIcon color="warning" />
              ) : (
                <RemoveCircleOutlineIcon />
              )
            }
          >
            Onsite
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            onMouseDown={() => activeStep === 2 && setShowCard(true)}
            onMouseUp={() => activeStep === 2 && setShowCard(false)}
            icon={
              activeStep > 2 ? (
                <CheckCircleIcon color="success" />
              ) : activeStep === 2 ? (
                <WatchLaterIcon color="warning" />
              ) : (
                <RemoveCircleOutlineIcon />
              )
            }
          >
            Low level design
          </StepLabel>
        </Step>
        <Step>
          <StepLabel
            onMouseDown={() => activeStep === 3 && setShowCard(true)}
            onMouseUp={() => activeStep === 3 && setShowCard(false)}
            icon={
              activeStep > 3 ? (
                <CheckCircleIcon color="success" />
              ) : activeStep === 3 ? (
                <WatchLaterIcon color="warning" />
              ) : (
                <RemoveCircleOutlineIcon />
              )
            }
          >
            Hiring manager
          </StepLabel>
        </Step>
      </Stepper>
      {showCard && <Card Info={Info} />}
    </div>
  );
};

export default MyStepper;
