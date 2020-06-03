import React from "react";
import "./App.css";

import Header from "./Components/header";
import Main from "./Components/main";
import Information from "./Components/information";
import Section from "./Components/section";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Information />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
