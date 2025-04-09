import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AddNewSalesActivity } from "./screens/AddNewSalesActivity";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AddNewSalesActivity />
  </StrictMode>,
);
