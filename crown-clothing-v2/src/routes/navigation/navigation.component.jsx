import { Outlet, Link } from "react-router-dom";

import  {ReactComponent as Logo} from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
         <Logo/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>
          <Link className="nav-links" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
