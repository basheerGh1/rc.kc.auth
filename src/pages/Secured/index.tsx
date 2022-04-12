import React from "react";
import Keycloak from "keycloak-js";
import { Link } from "react-router-dom";
import produce from "immer";
import UserInfo from "./UserInfo";
import Logout from "./Logout";

const Secured = () => {
  const keycloak = Keycloak("/keycloak.json");
  const [state, setState] = React.useState<{
    keycloak: null | any;
    authenticated: boolean;
  }>({
    keycloak: null,
    authenticated: false,
  });

  const initKeycloak = () => {
    if (keycloak)
    keycloak.init({ onLoad: "login-required" }).then((auth) => {
      setState(
        produce(state, (draft) => {
          draft.keycloak = keycloak;
          draft.authenticated = auth;
        })
      );
    });
  else console.log("keycloak error");
  } 


  console.log(state)
  if (state.keycloak) {
    if (state.authenticated)
      return (
        <div>
          <span>Du är autentiserad via keycloak</span>
          <UserInfo keycloak={state.keycloak}/>
          <Logout  keycloak={state.keycloak} />
        </div>
      );
    else return <span>Det gick inte att utentisera dig</span>;
  }
  return (
    <div>
      <span style={{cursor: "pointer", color: "blue"}} onClick={initKeycloak}>initial keycloak</span> <br />
      <Link to="/">tillbaka</Link> <br />
    </div>
  );
};

export default Secured;
