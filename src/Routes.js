import React from "react";
import { Switch, Route } from "react-router-dom";
import { CustomTOTP } from "./views/SetupTOTP";
import { FrontPage } from "./views/FrontPage";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route path="/MFA" component={() => <CustomTOTP authData={props.authData} authState={props.authState} />}  isPrivate/>
    </Switch>
  );
}
