import { PanelHeader, View, Panel, CardGrid, ContentCard } from '@vkontakte/vkui';
import React, { useState } from 'react';
import ItemListAge from './ItemListAge/ItemListAge';
import test from './petr.png'

const ListAge = ({id, eras,curWidth, createOnClickItemAge=index=>null}) => {
    const createIdPanel = index => `${id}_${index}`;

    const [indexActivePanel, setIndexActivePanel] = useState(0);

    const createGoRight = (index) => () => setIndexActivePanel(index + 1);

    const createGoLeft = (index) => () => setIndexActivePanel(index - 1);

    const ID_ACTIVE_PANEL = "ID_ACTIVE_PANEL";

    const getColNumber = (curWidth) => {
        if(curWidth>1280){
            return "s"
        }
        else if (curWidth>560){
            return "m"
        }
        else {
            return "l"
        } 
    }

    return (
        <View id={id} activePanel={ID_ACTIVE_PANEL}>
            <Panel id={ID_ACTIVE_PANEL}>
                <PanelHeader                     
                    separator={false}
                    visor={true}
                    transparent={true}
                    fixed={false}>
                    Выберете эпоху
                </PanelHeader>

            <CardGrid size={getColNumber(curWidth)}>
                {
                    eras.map((age, i, arrAge) => (
                        <ContentCard
                            header={age.title}
                            image={test}
                        />
                    ))
                }
            </CardGrid>

            </Panel>


            {/* <ContentCard
              image="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
              subtitle="unsplash"
              header="brown and gray mountains under blue sky during daytime photo"
              text="Mountain changji"
              caption="Photo by Siyuan on Unsplash"
              maxHeight={150}
            />
            <ContentCard
              image="https://images.unsplash.com/photo-1603928726698-a015a1015d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              subtitle="unsplash"
              header="persons left hand with pink paint"
              text="Five hours of makeup and paint to achieve the human anatomy photoshoot. Thank you Steph and Shay. See more and official credit on @jawfox.photography."
              caption="Photo by Alexander Jawfox on Unsplash"
              maxHeight={500}
            /> */}
            

            {/* {
                eras.map((age, i, arrAge) => (
                    <ItemListAge
                        key={createIdPanel(i)}
                        id={createIdPanel(i)}
                        title={age.title}
                        imageSrc={age.imageSrc}
                        percentProgress={age.percentProgress}
                        onClick={createOnClickItemAge(i)}
                        hasLeftButton={i > 0}
                        hasRightButton={i < arrAge.length - 1}
                        goLeft={createGoLeft(i)}
                        goRight={createGoRight(i)}
                    />
                ))
            } */}
        </View>
    )
}

export default ListAge;
