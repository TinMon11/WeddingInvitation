import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Classic from "./invitationStyles/Classic.jsx";
import Premium from "./invitationStyles/Premium.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route
            path="/premium"
            element={
              <Premium name1="Cata" name2="Mateo" invitationStyle={"premium"} />
            }
          />
          <Route
            path="/classic"
            element={
              <Classic
                name1="Cande"
                name2="Nacho"
                invitationStyle={"classic"}
              />
            }
          />
          <Route path="*" element={<Navigate to="/classic" />} />
        </Routes>
      </Provider>
    </>
  );
};
