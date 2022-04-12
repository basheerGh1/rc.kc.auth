import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC<any> = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    props.keycloak.logout();
  };

  return (
    <div>
      <span  style={{cursor: "pointer", color: "red"}} onClick={logout}>logga ut</span>
    </div>
  );
};

export default Logout;
