import axios from 'axios';

//Для запросов на сервер
const http = axios.create({
    headers: {
        // Прикрепляем заголовок, отвечающий за параметры запуска.
        Authorization: `${window.location.search.slice(1)}`
    }
});
export const DEFAULT_IMAGE_EXPANSION = ".webp"
export const DEFAULT_URL = "https://aaee-212-16-10-199.ngrok.io/"
export const DEFAULT_URL_DOWNLOAD_IMG = DEFAULT_URL+"getImage?imageName="
const reqSvgs = require.context( '../../svg', true, /\.svg$/ )


//Загрузка isFirstOpen и eras
export const downloadData = async () => {

    let data = await http.get(DEFAULT_URL)
                        .then(data=>{return data.data})
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
    const data = await http.post(DEFAULT_URL+"giveAnswers",{
        userAnswers:userAnswers
    }).then(data=>{return data.data})

    return data
}