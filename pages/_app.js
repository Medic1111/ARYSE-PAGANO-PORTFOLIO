import "../styles/globals.css";
import "../styles/Home.css";
import "../styles/Contact.css";
import "../styles/About.css";

import React from "react";
import { useState } from "react";

// Components
import Wrapper from "../components/Wrapper/Wrapper";
import Footer from "../components/Footer/Footer";
import Nav from "../components/NavComps/Nav/Nav";
import MenuModal from "../components/NavComps/MenuModal/MenuModal";
// Contexts
import { menuModalContext } from "../contexts/menuModal-context";

function MyApp({ Component, pageProps }) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <menuModalContext.Provider value={{ isMenu, setIsMenu }}>
        <Wrapper>
          {isMenu ? <MenuModal /> : null}
          <Nav />
          <Component {...pageProps} />
        </Wrapper>
        <Footer />
      </menuModalContext.Provider>
    </>
  );
}

export default MyApp;
