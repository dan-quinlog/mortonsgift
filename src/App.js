import React from "react";

import "./styles/main.scss";
import Navbar from "./navbar/navbar";
import ShopView from './shopview/shopview';
import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShopView />
      <div className='footer__spacer'></div>
      <Footer />
    </div>
  );
}

export default App;