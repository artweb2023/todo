import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportwebvitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportwebvitals(console.log))
// or send to an analytics endpoint. learn more: https://bit.ly/cra-vitals
reportwebvitals();
