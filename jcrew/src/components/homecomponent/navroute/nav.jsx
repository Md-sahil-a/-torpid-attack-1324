import { Link, Outlet } from "react-router-dom";
// import CartIcon from "../../carticon/cart-icon";
const Nav = () => {

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
    
          <p className="sub-logo">Fashion</p>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Signout
            </span>
          ) : (
            <Link to="/sign-in">Sign-in</Link>
          )}
          <CartIcon/>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};


export default Nav;



