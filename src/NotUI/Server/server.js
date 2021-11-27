import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Alert_setAlert } from '../../components/Alert/actions';
import AlertCloseApp from '../../components/Alert/AlertCloseApp/AlertCloseApp';

//Для запросов на сервер
const http = axios.create({
    headers: {
        // Прикрепляем заголовок, отвечающий за параметры запуска.
        Authorization: `${window.location.search.slice(1)}`
    }
});
export const DEFAULT_IMAGE_EXPANSION = ".webp"
export const DEFAULT_URL = "https://fb73-62-33-49-154.ngrok.io/"
export const DEFAULT_URL_DOWNLOAD_IMG = DEFAULT_URL+"getImage?imageName="
const reqSvgs = require.context( '../../svg', true, /\.svg$/ )


// //Загрузка перед входом в основное окно приложения
// export async function firstDownload(){	
//     // await downloadDefaultIMG();
//     const data = await downloadData();
//     // await downloadImagesArr(data.eras);
//     return data
// }

// const dispatch = () => {useDispatch()}

//Загрузка isFirstOpen и eras
export const downloadData = async () => {

    let data = await http.get(DEFAULT_URL)
                        .then(data=>{return data.data})
                        .catch(err => {
                            console.log(err + " - downloadData error")
                        })
    console.log(data)
    return data;
}

// Загрузка изображений, которы должны быть в кэше до запуска
export async function downloadDefaultIMG(){
    // let retArr = []

    const paths = reqSvgs.keys();

    
    for(let i=0;i<paths.length;i++){
        await downloadImgFromFolder(paths[i]).then(imageData=>{

            // retArr.push({
            //     imageName:paths[i], 
            //     data:imageData
            // })
        })
    }

}

export async function downloadImgFromFolder(path){
    let ret = undefined

    let img = new Image();
    img.src = reqSvgs(path);

    img.onerror = () => {
        console.log(img.src + " - downloadImgFromFolder error")
    }
    img.onload = () => {
        // console.log(img)
        // ret = img.src
    }
}

export async function TestdownloadImagesArr(arr){

    let retArr = []
    for(let i=0;i<42;i++){
        await downloadImageFromServer(arr[0]).then(imageData=>{

            // retArr.push({
            //     imageName:arr[i], 
            //     data:imageData
            // })
        })
    }
    // return retArr
}

export async function downloadImagesArr(arr){

    let retArr = []
    for(let i=0;i<arr.length;i++){
        await downloadImageFromServer(arr[i].imageName).then(imageData=>{

            retArr.push({
                imageName:arr[i].imageName,
                sourceImageLink:arr[i].sourceImageLink,
                data:imageData
            })
        })
    }
    return retArr
}


// Загрузка изображений с сервера
export async function downloadImageFromServer(imageName){
    const image = await http.get(DEFAULT_URL+"getImage?imageName=" + imageName + DEFAULT_IMAGE_EXPANSION,{
        responseType: 'arraybuffer'
    }).then(response => Buffer.from(response.data, 'binary').toString('base64'))
    
    return `data:image/jpeg;base64,${image}`;
}

// Отправка ответа на сервер
export async function sendUserAnswersToServer(userAnswers){
    console.log(userAnswers)
    const data = await http.post(DEFAULT_URL+"giveAnswers",{
        userAnswers:userAnswers
    }).then(data=>{return data.data})

    return data
}