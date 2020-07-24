//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

import Trafficlights from "./component/trafficlights.jsx";

//render your react application
ReactDOM.render(<Trafficlights />, document.querySelector("#app"));
