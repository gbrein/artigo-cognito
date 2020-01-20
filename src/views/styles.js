import styled from 'styled-components';

import { Button, FormControl, TextField } from '@material-ui/core';

export const StyledContainer = styled.div`
  margin-top: 7em;
  .container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin: 10px 0 !important;
`;

export const StyledTextField = styled(TextField)`
  margin: 10px 0 !important;
`;

export const StyledButton = styled(Button)`
  background-color: #74b61b !important;
  margin: 10px 0 !important;
  width: 100%;
`;
