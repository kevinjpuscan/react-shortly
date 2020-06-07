import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./store/reducer";

import Header from "./Components/header";
import Main from "./Components/main";
import Information from "./Components/information";
import Section from "./Components/section";
import Footer from "./Components/footer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Main />
        <Information />
        <Section />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
