import imgMain from "../../img/ageRF/Zero/Zero.jpg";

import img1 from "../../img/ageRF/Zero/img1.jpg";
import img2 from "../../img/ageRF/Zero/img2.jpg";
import img3 from "../../img/ageRF/Zero/img3.jpg";
import img4 from "../../img/ageRF/Zero/img4.jpg";
import img5 from "../../img/ageRF/Zero/img5.jpg";
import img6 from "../../img/ageRF/Zero/img6.jpg";
import img7 from "../../img/ageRF/Zero/img7.jpg";
import img8 from "../../img/ageRF/Zero/img8.jpg";

const Zero = {
    title: "Нулевые",
    description:"Описание",
    percentProgress: 0,
    numberOfQuestions: 8,
    imageSrc: imgMain,
    questions: [
        {
            imageSrc: img1,
            linkOriginPhoto: "https://www.flickr.com/photos/kristoffer-trolle/40588411473/in/photolist-24QEdDP-8rou28-6YCCCD-7qqiVa-Myr8m3-NgsQHD-7CvC46-CKME9U-29DVmgL-XwC2eb-pCHa79-aebVAb-P3CF5L-rUE8tQ-HHkMwh-JeKXGC-TxLrF2-D8c4fL-21osJCo-bRGzWx-NAHSP-DNeEib-y5oQTb-eDDNiF-uEyuJi-e4WqDn-rDQWNB-215SXvJ-o7Ny3d-fxJyd-r9hjk7-EesQgh-25MtnPo-H5673U-rxHCGA-qj9wvw-r3BfHh-4wCRXA-CvASK4-tkHTtd-f9geAA-bnVBLy-dmpbvA-rafVkw-923mtQ-r2Wikr-dNaA5i-amkjYy-dTHUqH-K6Wp4P",
            questionText: "Почему 25 мая 2005 года в Москве многим людям пришлось возвращаться домой пешком?",
            answerOptions: [
                {
                    text: "Из-за взрыва в метро",
                    score: 0
                },
                {
                    text: "Произошла авария в энергосистеме",
                    score: 1
                },
                {
                    text: "Противники монетизации льгот перекрыли дороги",
                    score: 0
                }
            ]
        },
        {
            imageSrc: img2,
            linkOriginPhoto: "https://www.flickr.com/photos/brieuc/2991630124/in/photolist-5ymTpJ-5ZJcJE-4kASi1-NoSdv-5yi5Ec-pXrD2-7fPmpj-3AdyY-4CPjhT-gDc7J-srznLQ-d4MKmq-56SVMa-bpyXtS-4vcES-2fUXwQ-29p2FSm-qcPEhP-5DXQGC-5DTzcH-5noFUF-6raagH-6hZM5z-5ZyvB5-8Tyg7-6XiSgc-4RtyeS-5M8mj9-6z5WDK-oKqCP3-bLLfP4-xgqxs-AE6Fi-ju4wrN-pkCDA-sztQL-b71xan-5kkWtd-9BTx9a-9BWukL-5GMdDZ-4V56W1-5hVhCa-6n5fV9-768R64-DCrNF1-2jNRATr-2fq1HPd-Ld5ujp-qdcjg2",
            questionText: "Почему 25 мая 2005 года в Москве многим людям пришлось возвращаться домой пешком?",
            answerOptions: [
                {
                    text: "2001",
                    score: 0
                },
                {
                    text: "2004",
                    score: 1
                },
                {
                    text: "2008",
                    score: 0
                }
            ]
        },
        {
            imageSrc: img3,
            linkOriginPhoto: "https://www.flickr.com/photos/32322040@N06/50576826581/in/photolist-2k4istp-QoDBgD-xgDuU3-2jASiTV-QJUB67-2iuNpzh-2ehiLwT-dcDsdB-2iNsXkD-2iuQdMq-25aqNt6-2iWYGAu-nZdgyD-2iLADAh-2iDR6zt-2j7GkRF-QBsgF6-2iUTKSn-cRmUJ1-cRmULh-cRmUGd-i3eUEZ-2irfvgQ-urWciH-2k4isum-2jjTez5-2hhHymA-2i5LXcJ-8FnKmY-DG4X-2yYiA6-2z33Th-2z2nej-2z33Vu-2z2n2y-2z2n3w-2z343m-2gyhZ5E-2yYV9o-2z2n1o-3RzVuS-2z33Z9-2iMKS3w-2yYVbE-2yWydf-d4o3mb-22oZfLu-2yVUwC-2yVUsG-2yVUvN",
            questionText: "Что происходило с 23 по 26 октября 2002 года в Москве?",
            answerOptions: [
                {
                    text: "Саммит «большой восьмёрки»",
                    score: 0
                },
                {
                    text: "Газовый конфликт между Россией и Украиной",
                    score: 0
                },
                {
                    text: "Захват заложников в Театральном центре на Дубровке",
                    score: 1
                }
            ]
        },        
        {
            imageSrc: img4,
            linkOriginPhoto: "https://www.flickr.com/photos/sibekokke/1117587017/in/photolist-2GKVFF-4ArWj3-4ygBrh-AnVpq6-7HGaTv-GgzTog-Bkkgre-4YjV7o-4YfEBe-4YjUNs-4YjVid-4YfEje-AJvfft-8dMR6q-4ygBs7-5WQmfd-AnVrBR-Bi2yGf-ALPoRR-2j2GjKs-4wBMzC-91qfBY-dwKhcg-A9EDFy-8hazk-HNsZa4-26J5X2S-5PRtEX-2krvCEx-5PRtp4-osfhkr-AP18e-5PRtLK-B6wMW4-gLPvM-FxkA8-8Bf55K-4nFYWF-emPbDW-ruNTSk-aTbG8-gh5hni-5EbEEj-6TCsp-6z3eJ-5FaTYA-5F6ArR-5FaTyq-nskxq-MXNhw9",
            questionText: "Что произошло в августе 2000 года, когда вещание большинства российских телеканалов на Москву и Московскую область было приостановлено, а три человека погибли?",
            answerOptions: [
                {
                    text: "Захват НТВ",
                    score: 0
                },
                {
                    text: "Погром на Манежной площади",
                    score: 0
                },
                {
                    text: "Пожар на Останкинской телебашне ",
                    score: 1
                }
            ]
        },
        {
            imageSrc: img5,
            linkOriginPhoto: "",
            questionText: "С этим местом связана трагедия, произошедшая 17 августа 2009 года. Что это?",
            answerOptions: [
                {
                    text: "АЭС Фукусима–1",
                    score: 0
                },
                {
                    text: "Саяно–Шушенская ГЭС ",
                    score: 1
                },
                {
                    text: "АЭС Три–Майл–Айленд",
                    score: 0
                }
            ]
        },
        {
            imageSrc: img6,
            linkOriginPhoto: "https://www.flickr.com/photos/zapthedingbat/5531724951/in/photolist-9qPx78-9qSnz3-o8hRRG-o8gKNx-9qPp7n-ir7oD-opuQqP-9qSnao-9qSwzG-orwxyZ-2iyguJu-JWvMub-K6GPFT-4g1yNz-2iBjUJe-9qPoo2-2iz1sjb-CEYF1-5kQnpy-orwGNv-orw8Ga-9qSnjC-o8igvK-opumr2-9qPoF2-5kQmFs-o8hTy9-opLMti-9qPovZ-9qPoGT-onKE5f-opuCFM-9qSndd-9qPpNX-opMna6-onK7Mq-o8hdnq-opMdSK-9qPobp-9qSp3q-9qSq3j-4UKAC3-opLKaF-9qSnuL-orwZXk-9qPpZH-9qSoP7-orwQPa-9qSwyo-onKs8j",
            questionText: "Что произошло в апреле 2000 года?",
            answerOptions: [
                {
                    text: "Завершились активные боевые действия Второй чеченской войны",
                    score: 1
                },
                {
                    text: "Избрание В. Путина президентом РФ",
                    score: 0
                },
                {
                    text: "Арест Михаила Ходорковского",
                    score: 0
                }
            ]
        },
        {
            imageSrc: img7,
            linkOriginPhoto: "https://www.flickr.com/photos/pedrosz/49669484811/in/photolist-2iF86nM-2jk9zix-2jpG2vB-2iyfWEn-2iH9LAh-2iDf1xj-2iFLyQe-2jkLbtb-2jCHgRr-2jA15Uq-2jr8eXe-2iEisj4-2iz1sjb-2izAGFg-2iD1St6-EdzN4R-2g9GhyY-2dJcKUK-24ssb7a-2i3eGHC-2cp7FMA-ffie9A-ff3Yhi-2iCfHbL-ECRTvP-2jFbsyv-CnrC6x-296vjMN-2extTv2-2hZdqf7-EjWwZq-2iCt4RR-ffiaou-A5RQhb-HKMLB2-ffiea9-2gN8Agy-ffiaps-ffiapf-ff3Q2X-ff3U6p-21qQHWo-2gsXy7H-nkxYsz-FnKro6-CT88Vh-2gY5VHz-KVUtkj-RnxoCJ-N27twc",
            questionText: "Значимое событие в 2006 в Санкт-Петербурге",
            answerOptions: [
                {
                    text: "Саммит глав стран «Большой восьмёрки»",
                    score: 1
                },
                {
                    text: "Саммит глав стран “СНГ”",
                    score: 0
                },
                {
                    text: "Международный форум стран экспортёров газа",
                    score: 0
                }
            ]
        },
        {
            imageSrc: img8,
            linkOriginPhoto: "https://www.flickr.com/photos/pedrosz/49669484811/in/photolist-2iF86nM-2jk9zix-2jpG2vB-2iyfWEn-2iH9LAh-2iDf1xj-2iFLyQe-2jkLbtb-2jCHgRr-2jA15Uq-2jr8eXe-2iEisj4-2iz1sjb-2izAGFg-2iD1St6-EdzN4R-2g9GhyY-2dJcKUK-24ssb7a-2i3eGHC-2cp7FMA-ffie9A-ff3Yhi-2iCfHbL-ECRTvP-2jFbsyv-CnrC6x-296vjMN-2extTv2-2hZdqf7-EjWwZq-2iCt4RR-ffiaou-A5RQhb-HKMLB2-ffiea9-2gN8Agy-ffiaps-ffiapf-ff3Q2X-ff3U6p-21qQHWo-2gsXy7H-nkxYsz-FnKro6-CT88Vh-2gY5VHz-KVUtkj-RnxoCJ-N27twc",
            questionText: "Что было в 2009 году в России впервые?",
            answerOptions: [
                {
                    text: "Евровидение",
                    score: 1
                },
                {
                    text: "Фестиваль нашествие",
                    score: 0
                },
                {
                    text: "Фестиваль хиппи",
                    score: 0
                }
            ]
        },
        
    ]
}

export default Zero;
