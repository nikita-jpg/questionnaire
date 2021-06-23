
import React from 'react';
import './ListQuizes.css'
import ListCard from '../../components/ListCard/ListCard'

const ListQuizes = ({quizes, curWidth, createOnClickItemQuizes = (index) => null }) => {
    return (
        <div className="ListAge">

            <ListCard
                info={quizes}
                curWidth={curWidth}
                cardClick={createOnClickItemQuizes}>
            </ListCard>
        </div>
    )
}

export default ListQuizes;
