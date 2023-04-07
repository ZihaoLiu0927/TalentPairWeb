import React from 'react';
import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

const StyleWrapper = styled('div')(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  box-shadow: ${theme.shadows[1]};
  border-radius: ${theme.shape.borderRadius}px;
  padding: ${theme.spacing(2)};
  min-width: 300px;
`,
);

export default () => {

    return (
        <StyleWrapper>
            <LinearProgress />
        </StyleWrapper>
    );
}