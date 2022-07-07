import ReactDOM from "react-dom/client";
import "./styles.ts";
import App from "./App";
import GlobalStyles from "./styles";
import { TransitionGroup } from "react-transition-group";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
