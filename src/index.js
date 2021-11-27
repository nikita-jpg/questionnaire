import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App/App";

import store, { savePercentQuiz } from "./store/store.js";
import { Platform } from "@vkontakte/vkui";
import { createStore } from "redux";
import {comboReducer} from './comboReducer'
import { Provider } from "react-redux";


bridge.send("VKWebAppGetConfig").then((data)=>console.log(data));

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
    .catch(error =>{
        console.log(error)
    })

bridge.subscribe((e) => {
    if(e.type == 'VKWebAppUpdateConfig') {
        console.log("fdwf"+e.data.status);
    }});

// const [isDownloaded, setIsDownloaded] = 

// const downloadImagesArr = async(arr) => {
//     for(let i=0;i<arr.length;i++){
//         await new Promise((resolve, reject) => {
//             const img = new Image();
//             img.src = arr[i].imageSrc;
//             img.onload = () => {
//                 resolve()
//             }
//         });
//     }
// }
// const firstDownload = async () => {	
//     await downloadImagesArr(store.eras);
//     for(let i=0;i<store.eras.length;i++)
//     {
//         await downloadImagesArr(store.eras[i].quizzes)
//     }
// }
// firstDownload().then(()=>{
//     startRender()
// })

const state = createStore(comboReducer)


ReactDOM.render(
    <Provider store={state}>
        <App {...store} savePercentQuiz={savePercentQuiz}/>
    </Provider>, 
    document.getElementById("root")
);

// const startRender = () =>{

// }


import("./eruda").then(({ default: eruda }) => {}); //runtime download

