import { View } from '@vkontakte/vkui';
import React, { useState } from 'react';
import ItemListAge from './ItemListAge/ItemListAge';

const ListAge = ({id, eras, createOnClickItemAge=index=>null}) => {
    const createIdPanel = index => `${id}_${index}`;

    const [indexActivePanel, setIndexActivePanel] = useState(0);

    const createGoRight = (index) => () => setIndexActivePanel(index + 1);

    const createGoLeft = (index) => () => setIndexActivePanel(index - 1);

    return (
        <View id={id} activePanel={createIdPanel(indexActivePanel)}>
            {
                eras.map((age, i, arrAge) => (
                    <ItemListAge
                        key={createIdPanel(i)}
                        id={createIdPanel(i)}
                        title={age.title}
                        image={age.image}
                        percentProgress={age.percentProgress}
                        onClick={createOnClickItemAge(i)}
                        hasLeftButton={i > 0}
                        hasRightButton={i < arrAge.length - 1}
                        goLeft={createGoLeft(i)}
                        goRight={createGoRight(i)}
                    />
                ))
            }
        </View>
    )
}

export default ListAge;
