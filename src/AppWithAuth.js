import React from "react";
import { Authenticator } from "aws-amplify-react";
import amplify_config from "./AmplifyConfig";
import Amplify from "aws-amplify";
import App from "./App";
import { I18n } from "aws-amplify";

Amplify.configure(amplify_config);

const customLabels = {
  en: {
    "Sign in to your account": "Entrar com a sua conta",
    'Username': "Nome de Usuário"
  }
};

I18n.setLanguage("en");
I18n.putVocabularies(customLabels);

const customTheme = {
  button: { backgroundColor: "red", borderColor: "red" }
};

const AppWithAuth = props => {
  return (
    <Authenticator theme={customTheme} authState="signIn">
      <App />
    </Authenticator>
  );
};

export default AppWithAuth;
