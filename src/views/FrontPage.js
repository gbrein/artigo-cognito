import React from "react";
import { Link } from "react-router-dom";

export const FrontPage = () => {
  return (
    <div className="App">
      <span>Página depois do Login</span> <br />
      <Link to="/MFA">Setup de MFA</Link>
    </div>
  );
};
