import "./header.styles.scss";

import { Outlet, Link } from "react-router-dom";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="header-wrapper">
        <div>
          <Link to="/">
            <h1 className="header-logo">monden</h1>
          </Link>
        </div>
        <div className="header-navigation">
          <h3 className="navigation-item">
            <Link to="/shop">shop</Link>
          </h3>
          <h3 className="navigation-item">
            <Link to="/contact">contact</Link>
          </h3>
          <h3 className="navigation-item">
            {currentUser ? (
              <span onClick={signOutHandler}>sign out</span>
            ) : (
              <Link to="/auth">sign in</Link>
            )}
          </h3>
          <p className="navigation-item">
            <Link to="/shop">
              <ShoppingBagIcon />
            </Link>
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
