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
              <Premium
                background={"background_premium"}
                name1="Marta"
                name2="Juan"
                homeTextColor={"text-white"}
                homeTextFontStyle={"handwritting"}
              />
            }
          />
          <Route
            path="/classic"
            element={
              <Classic
                background={"background"}
                name1="Cande"
                name2="Nacho"
                homeTextColor={"text-black"}
                homeTextFontStyle={"handwritting2"}
              />
            }
          />
          <Route path="*" element={<Navigate to="/classic" />} />
        </Routes>
      </Provider>
    </>
  );
};
