import ReactDOM from "react-dom/client";
import "./styles.ts";
import App from "./App";
import { AppThemeProvider } from "./Context/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);
