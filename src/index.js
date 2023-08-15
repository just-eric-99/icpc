import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// // Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || "0.0.0.0";
// // Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 3000;
// var cors_proxy = require("cors-anywhere");
// cors_proxy
//   .createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ["origin", "x-requested-with"],
//     removeHeaders: ["cookie", "cookie2"],
//   })
//   .listen(port, host, function () {
//     console.log("Running CORS Anywhere on " + host + ":" + port);
//   });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
