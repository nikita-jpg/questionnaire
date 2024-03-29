import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App/App";

import { Platform } from "@vkontakte/vkui";
import { createStore } from "redux";
import {comboReducer} from './comboReducer'
import { Provider } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";

import { BrowserRouter, useNavigate } from "react-router-dom";

bridge.send("VKWebAppGetConfig");

// Init VK  Mini App
bridge.send("VKWebAppInit");

bridge
    .send("VKWebAppGetClientVersion")
    .then(data => {
        if(data.platform === Platform.IOS){
            bridge.send("VKWebAppSetViewSettings", {"status_bar_style": "light"});
        }
        else if (data.platform === Platform.ANDROID){
            bridge.send("VKWebAppSetViewSettings", {"status_bar_style": "light", "action_bar_color": "#000","navigation_bar_color":"#000000"});
        }
    })

const state = createStore(comboReducer)
// const navigate = useNavigate()

// window.addEventListener('popstate', (event) =>{
// 	console.log(event)
// })
// window.onpopstate = function(event) {
// 	console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// };

// console.log(window.location.search.slice(1).vk_platform)
ReactDOM.render(
    <Provider store={state}>
        <BrowserRouter basename="/">
        {/* <BrowserRouter basename="/index.html"> */}
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById("root")
);

import("./eruda").then(({ default: eruda }) => {}); //runtime download

