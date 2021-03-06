import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./normalize.css";
import App from "./App";
import store from "./store";

ReactDOM.render(<Provider {...store}>
  <App />
</Provider>, document.getElementById("root"));
