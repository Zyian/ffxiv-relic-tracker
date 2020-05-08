import React from "react";

import Nav from "./nav/Nav";
import Showcase from "./showcase/showcase";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="bg-gray-700">
      <Nav />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
