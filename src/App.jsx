import React from "react";

import Nav from "./nav/Nav";
import Showcase from "./showcase/showcase";

function App() {
  return (
    <div className="bg-gray-700 h-screen">
      <Nav />
      <Showcase className="my-24" />
    </div>
  );
}

export default App;
