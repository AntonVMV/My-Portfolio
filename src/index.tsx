import ReactDOM from "react-dom/client";
import "./styles.ts";
import App from "./App";
import GlobalStyles from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
