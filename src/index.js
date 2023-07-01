//1) importing React and ReactDom
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
console.log(React, ReactDOM);

//2) getting element with the root id
const el = document.getElementById("root");

//3) tell react that we want to show the application inside the above ele
const root = ReactDOM.createRoot(el);

//4) show/display/render the component
root.render(<App />);
