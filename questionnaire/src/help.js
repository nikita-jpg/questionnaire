import React from 'react';
export function isTitleCentre (curWidth, element) {
    return({
    stub:curWidth >= 370 ? <div style={{width:"90px"}}>{element} </div> :element,
    text:curWidth >= 370 ? {textAlign:"center"} : null
    })
}

export function getColNumber(curWidth) {
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
