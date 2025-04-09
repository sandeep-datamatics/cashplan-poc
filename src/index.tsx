import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { AddNewSalesActivity } from "./screens/AddNewSalesActivity";
import store from './store';

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <AddNewSalesActivity />
    </Provider>
  </StrictMode>,
);
