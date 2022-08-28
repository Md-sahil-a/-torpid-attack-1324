import { Link, Outlet } from "react-router-dom";
import CartIcon from "./carticon/cart-icon";
import { signOutUser } from "./Login/firebase_utitls/firebase_auth";
import { UserContext } from "./Login/context/userContext";
import { useContext } from "react";
import './testnav.css'
export const Nav2 = () => {
    const { currentUser } = useContext(UserContext);
  return (
    <>
      <div className="bignav">
        <div className="nav1">
          <Link className="logo-container nope" to="/">
            J.CREW
          </Link>

          <Link className="no" to='man'>Men</Link>
          <Link className="no" to='/woman'>Woman</Link>
          <Link className="no" to='/'>Kid</Link>
        </div>
        <div className="nav2">
            <input className="inpt" placeholder="Search products"/>
            {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Signout
            </span>
          ) : (
            <Link className="no" to="/login">Sign-in</Link>
          )}
          
        </div>
        <Link to='cart'><CartIcon/></Link> 
      </div>
      <Outlet />
    </>
  );
};
