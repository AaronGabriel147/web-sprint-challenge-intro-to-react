// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Character from '../src/components/Character' // I typed this but did not need to. Same with the Invocation next to <App />

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />,  document.getElementById("root"));
