import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/sass.min.css";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import {BrowserRouter} from "react-router-dom";
//To me=> Redux
import App from "./app.js";
export default function Index() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.querySelector("#app"));
