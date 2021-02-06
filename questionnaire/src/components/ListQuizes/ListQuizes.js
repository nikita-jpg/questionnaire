import React from 'react';
import ItemListQuizes from './ItemListQuizes/ItemListQuizes';

import "./ListQuizes.css";

const ListQuizes = ({quizes, createOnClickItemQuizes = (index) => null }) => {
    return (
        <ul className="ListQuizes">
            {
                quizes.map((quiz, i) => (
                    <ItemListQuizes
                        key={i}
                        imageSrc={quiz.imageSrc}
                        title={quiz.title}
                        onClick={createOnClickItemQuizes(i)}
                        percentProgress={quiz.percentProgress}
                    />
                ))
            }
        </ul>
    )
}

export default ListQuizes;
