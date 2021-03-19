import React from 'react';

import './ItemListQuizes.css';

const ItemListQuizes = ({ imageSrc, title, onClick, percentProgress }) => {
    let classNamePersentProgress;

    if (percentProgress === undefined) {
        classNamePersentProgress = undefined;
    } else if (percentProgress > 50) {
        classNamePersentProgress = "ItemListQuizes__percent_good";
    } else if (percentProgress > 25) {
        classNamePersentProgress = "ItemListQuizes__percent_normal";
    } else {
        classNamePersentProgress = "ItemListQuizes__percent_bad";
    }

    return (
        <li className="ItemListQuizes">
            <div className="ItemListQuizes__image-wrap">
                <img className="ItemListQuizes__image" src={imageSrc} alt={`ItemListQuizes-${title}`} />

                {
                    classNamePersentProgress && <div className="ItemListQuizes__percent-wrap">

                        <span className={`ItemListQuizes__percent ${classNamePersentProgress}`}>{percentProgress}%</span>
                    </div>
                }
            </div>

            <div className="ItemListQuizes__row-bottom">
                <h2 className="ItemListQuizes__title">{title}</h2>

                <button onClick={onClick} className="ItemListQuizes__button-play">Играть</button>
            </div>
        </li>
    );
}

export default ItemListQuizes;
