import React from "react";
import { Link, useNavigate  } from "react-router-dom";


const Nav: React.FC<any> = (props) => {



  return (
    <div>
      <ul>

        <li>
          <Link to="/">hem Komponent</Link>
        </li>
        <li>
          <Link to="/secured">säkert Komponent</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
