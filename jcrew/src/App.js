import Home from "./components/homecomponent/home.jsx";
import { ManPage } from "./components/manpages/manpage.jsx";
import { ManInnerPage } from "./components/manpages/man.innerPage";
import { Woman } from "./components/WomanPage/womanPage";
import Sign from "./components/Login/auth/complete-auth.jsx";
import { WoMenInnerPage } from "./components/WomanPage/womeninnerpage.jsx";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/cart.jsx";

import { Nav2 } from "./components/TESTnav";
const App = () => {
  return (
    <>
      {/* <Home></Home> */}
      {/* <ManPage/> */}
      {/* <Woman/> */}
      {/* <ManInnerPage/> */}
      {/* <Sign/> */}
      {/* <Nav/> */}
      <Routes>
      <Route path="/" element={<Nav2 />}>
        <Route index element={<Home />} />
        <Route path="man" element={<ManPage />} />
        <Route path="woman" element={<Woman />} />
        <Route path="login" element={<Sign/>}/>
        <Route path="man/innerman" element={<ManInnerPage/>}/>
        <Route path="woman/womanpage" element={<WoMenInnerPage/>}/>
        <Route path="cart"  element={<Cart/>}/>
      </Route>
    </Routes>
    </>
  );
};
export default App;
