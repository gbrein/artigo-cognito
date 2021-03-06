import React from "react";
import { Authenticator, SignIn, SignUp } from "aws-amplify-react";
import App from "./App";
import Amplify from 'aws-amplify'
import { CustomSignIn } from "./views/SignIn";
import { CustomSignUp } from "./views/SignUp";
import { I18n } from "aws-amplify";
import awsmobile from './aws-exports'

Amplify.configure(awsmobile);

const customLabels = {
  en: {
    "Sign in to your account": "Entrar com a sua conta",
    Username: "Nome de Usuário"
  }
};

I18n.setLanguage("en");
I18n.putVocabularies(customLabels);

const customTheme = {
  button: { backgroundColor: "red", borderColor: "red" }
};

const AppWithAuth = props => {
  return (
    <Authenticator hide={[SignIn, SignUp]} theme={customTheme} authState="signIn">
      <CustomSignIn />
      <CustomSignUp />
      <App />
    </Authenticator>
  );
};

export default AppWithAuth;
