import { Panel, PanelHeader } from '@vkontakte/vkui';
import React from 'react';

import "./ItemListAge.css";

const ItemListAge = ({id, imageSrc, title, percentProgress, onClick,
    hasLeftButton, goLeft, hasRightButton, goRight}) => {

    return (
        <Panel id={id}>  
            <PanelHeader
                className="ItemListAge__PanelHeader"
                left={
                    <h1 className="ItemListAge__header">Выбор эпохи</h1>
                }
                visor={true}
                transparent={true}
                separator={false}
            ></PanelHeader>
            <div className="ItemListAge">
                <div className="ItemListAge__image-wrap">
                    <img className="ItemListAge__image" src={imageSrc} alt={`ItemListAge-image-${id}`}/>

                    {
                        hasLeftButton && 
                        <button onClick={goLeft} className="ItemListAge__arrow-button ItemListAge__arrow-button_left"></button>
                    }

                    {
                        hasRightButton && 
                        <button onClick={goRight} className="ItemListAge__arrow-button ItemListAge__arrow-button_right"></button>
                    }

                    <h2 className="ItemListAge__title">{title}</h2>
                </div>

                <p className="ItemListAge__progress">Пройдено {percentProgress}%</p>

                <button onClick={onClick} className="ItemListAge__button">Открыть</button>
            </div>
        </Panel>
    );
}

export default ItemListAge;