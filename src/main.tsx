import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <TooltipProvider>
          <HelmetProvider>
            <div onContextMenu={(e) => e.preventDefault()}>
              <App />
            </div>
          </HelmetProvider>
        </TooltipProvider>
      </BrowserRouter>
    </Provider>
  </>,
);
