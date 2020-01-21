import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { StyledContainer } from "./styles";

import {
  Typography,
  Grid,
  Avatar,
  Button,
  TextField,
  CssBaseline,
  Container
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

export const CustomSignUp = props => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");

  const sendSignUp = event => {
    event.preventDefault();
    Auth.signUp({
      username: email,
      password: password,
      attributes: {
        "custom:cep": cep,
        "custom:nome_completo": fullName,
        email,
        phone_number: phone
      }
    })
      .then(() => props.onStateChange("confirmSignUp"))
      .catch(err => console.log(err));
  };

  const showComponent = () => {
    return (
      <StyledContainer>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="container-form">
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className="form-signup" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    autoFocus
                    required
                    fullWidth
                    key="fullname"
                    label="Nome Completo"
                    name="fullname"
                    onChange={event => setFullName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    autoFocus
                    required
                    fullWidth
                    key="cep"
                    label="CEP"
                    name="cep"
                    onChange={event => setCep(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Endereço de E-mail"
                    name="email"
                    autoComplete="email"
                    onChange={event => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="phone_number"
                    label="Telefone"
                    name="phone_number"
                    autoComplete="phone_number"
                    onChange={event => setPhone(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </Grid>
              </Grid>

              <Button
                className="button-submit"
                onClick={event => sendSignUp(event)}
                fullWidth
                variant="contained"
                color="primary"
              >
                Cadastrar
              </Button>

              <Grid item>
                <Button onClick={() => props.onStateChange("signIn")}>
                  {"Login"}
                </Button>
              </Grid>
              <Grid item xs>
                <Button onClick={() => props.onStateChange("confirmSignUp")}>
                  Código de Confirmação
                </Button>
              </Grid>
            </form>
          </div>
        </Container>
      </StyledContainer>
    );
  };
  if (props.authState === "signUp") {
    return showComponent();
  } else {
    return <div></div>;
  }
};
