import { CardGrid, ContentCard, Div } from '@vkontakte/vkui';
import React from 'react';
import './ListCard.css'
import { getColNumber } from '../../help';

const ListCard = ( { info, curWidth, cardClick = (index) => null } ) => {
    return (
        <Div>
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
        </Div>
    )
}

export default ListCard