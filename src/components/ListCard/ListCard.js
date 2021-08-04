import { CardGrid, ContentCard, Div, Spinner } from '@vkontakte/vkui';
import React, { useState } from 'react';
import './ListCard.css'
import { getColNumber } from '../../help';

const ListCard = ( { info, curWidth, cardClick = (index) => null } ) => {

    // console.log(info)

    // const [spinner,setSpinner] = useState(false)

    // const downloadImagesArr = (arr) => {
	// 	for(let i=0;i<arr.length;i++){
	// 		const img = new Image();
	// 		img.src = arr[i].imageSrc;
	// 		console.log(img.src)
	// 	}
    // }

    // setSpinner(<Spinner></Spinner>)
    // downloadImagesArr(info)
    // setSpinner(false)


    return (
        <Div>
            {
            // spinner ||
            <div className="ListCard">
                <CardGrid size={getColNumber(curWidth)}>
                {
                    info.map((record,i) => (
                        <ContentCard
                            header={
                                <div className="ListCard__title">
                                    <div>{record.title}</div>
                                    <div>{record.percentProgress}/{record.numberOfQuestions}</div>
                                </div>
                            }
                            mode={"tint"}
                            onClick={cardClick(i)}
                            image={record.imageSrc}
                            caption={record.description}
                            className="ListCard__Card"
                        />
                    ))
                }
                </CardGrid>
            </div>
            }
        </Div>
    )
}

export default ListCard