import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ShopContextProvider } from "./context/shopContext.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShopContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ShopContextProvider>
  </StrictMode>
);
