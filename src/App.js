import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./layouts/Header";
import MainSidebar from "./layouts/MainSidebar";
import Content from "./layouts/Content";
import ControlSidebar from "./layouts/ControlSidebar";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    // Wrapper
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <MainSidebar />
        <Content />
        <ControlSidebar />
        <Footer />
      </BrowserRouter>
    </div>
    // ./wrapper
  );
};

export default App;
