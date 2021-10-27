
import axios from 'axios';

//Для запросов на сервер
const http = axios.create({
    headers: {
        // Прикрепляем заголовок, отвечающий за параметры запуска.
        Authorization: `${window.location.search.slice(1)}`
    }
});
export const DEFAULT_URL = "https://f313-212-16-10-199.ngrok.io/"
export const DEFAULT_URL_DOWNLOAD_IMG = "https://f313-212-16-10-199.ngrok.io/getImage?imageName="
const reqSvgs = require.context( '../../svg', true, /\.svg$/ )


// //Загрузка перед входом в основное окно приложения
// export async function firstDownload(){	
//     // await downloadDefaultIMG();
//     const data = await downloadData();
//     // await downloadImagesArr(data.eras);
//     return data
// }

//Загрузка isFirstOpen и eras
export async function  downloadData(){

    let data = await http.get(DEFAULT_URL)
                        .then(data=>{return data.data})
                        .catch(err => console.log(err + " - downloadData error"))

    //Переименовываемым эти ключи, так как оба они указывают на подмножеста, и ListCard обращается к свойству subset
    // let stringData = JSON.stringify(data)
    // stringData = stringData.replaceAll('"surveys":', '"subset":')
    // stringData = stringData.replaceAll('"questions":', '"subset":')
    // data = JSON.parse(stringData)

    return data;
}

// Загрузка изображений, которы должны быть в кэше до запуска
export async function downloadDefaultIMG(){
    const paths = reqSvgs.keys();
    for(let i=0;i<paths.length;i++){
        await downloadImgFromFolder(paths[i])
    }
}

export async function downloadImgFromFolder(path){
    let img = new Image();
    img.src = reqSvgs(path);

    img.onerror = () => {
        console.log(img.src + " - downloadImgFromFolder error")
    }
    img.onload = () => {
        window[img.src] = img
        return
    }
}

export async function downloadImagesArr(arr){

    let retArr = []
    for(let i=0;i<arr.length;i++){
        await downloadImageFromServer(arr[i]).then(imageData=>{
            let img = new Image();
            // img.src = imageData;
            img.src = imageData

            img.onerror = () => {
                console.log(img.src + " error")
            }
            img.onload = () => {
                window[img.src] = img
                retArr.push(img.src)
                return
            }
        })
    }
    return retArr
}


// Загрузка изображений с сервера
export async function downloadImageFromServer(imageName){
    const image = await http.get(DEFAULT_URL+"getImage?imageName=" + imageName,{
        responseType: 'arraybuffer'
    }).then(response => Buffer.from(response.data, 'binary').toString('base64'))
    
    return `data:image/jpeg;base64,${image}`;
}

// Отправка ответа на сервер
export async function sendUserAnswersToServer(userAnswers){
    const data = await http.post(DEFAULT_URL+"giveAnswers",{
        userAnswers:userAnswers
    }).then(data=>{return data.data})

    return "data"
}