import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

import store from "./store/store.js";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App {...store}/>, document.getElementById("root"));

import("./eruda").then(({ default: eruda }) => {}); //runtime download

