import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Template Matched',
  'Data is Uploding',
  'Data Uploaded',
];

export default function HorizontalLinearAlternativeLabelStepper(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.stepno} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
