import { Link } from "react-router-dom";
import { alafiaLogo } from "../assets";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={alafiaLogo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
