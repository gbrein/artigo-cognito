import React from "react";
import { SignIn } from "aws-amplify-react";
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Container,
  Typography
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { StyledContainer } from "./styles";

export class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }
  showComponent(theme: any) {
    return (
      <StyledContainer>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="container-form">
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              LogIn
            </Typography>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome de Usuário"
                name="username"
                autoComplete="username"
                onChange={this.handleInputChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                onChange={this.handleInputChange}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar-se"
              />
              <Button
                onClick={e => super.signIn(e)}
                fullWidth
                variant="contained"
                color="primary"
              >
                LogIn
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button onClick={() => super.changeState("forgotPassword")}>
                    Esqueceu a senha?
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => super.changeState("signUp")}>
                    {"Não tem uma conta? Cadastre-se"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </StyledContainer>
    );
  }
}
