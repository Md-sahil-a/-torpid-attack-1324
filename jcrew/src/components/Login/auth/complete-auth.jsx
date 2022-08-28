import EmaiLSignin from "./signin";
import EmailLSignup  from "../auth/sign-in-with-email/login"
import "./complete.scss";

import { Footer } from "../../footer/footer";
const Sign = () => {
  return (
    <>
    <div className="AuthenticationPage">
      <EmaiLSignin />
      <EmailLSignup />
    </div>
    <Footer/>
    </>
  );
};

export default Sign;