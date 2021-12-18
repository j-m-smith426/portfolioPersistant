import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Paper, Typography, MobileStepper, Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { FC, Fragment, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Iprops
{
    images:string[]
}

const BaseCarousel: FC<Iprops> = (props) =>
{
    const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
    return (
        <Fragment>
             

  
    <Box sx={{ maxWidth: 250, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
        //   display: 'flex',
          alignItems: 'center',
          height: 20,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    interval={5000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  maxWidth: 250,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step}
                alt={`Image: ${index+1}`}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
        </Fragment>
    );
}

export default BaseCarousel;