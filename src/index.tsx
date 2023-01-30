import React from "react";
import ReactDOM from "react-dom/client";
import Sell from "./containers/Sell";
import "./asset/style/index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TabbedLayout from "./containers/TabbedLayout";
import routes from "./helpers/routes";
import Buy from "./containers/Buy";
import Convert from "./containers/Convert";
import AppWrapper from "./components/Wrapper/AppWrapper";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<AppWrapper><TabbedLayout /></AppWrapper>}>
                    <Route index element={<Navigate to={routes.sell} replace />} />
                    <Route path={routes.sell} element={<Sell />} />
                    <Route path={routes.buy} element={<Buy />} />
                    <Route path={routes.convert} element={<Convert />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
