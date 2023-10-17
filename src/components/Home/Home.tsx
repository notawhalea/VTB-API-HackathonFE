import React from "react";
import { OidcSecure } from "@axa-fr/react-oidc";
const Home = () => {
  return (
    <OidcSecure>
      <h1>Home</h1>
    </OidcSecure>
  );
};

export default Home;
