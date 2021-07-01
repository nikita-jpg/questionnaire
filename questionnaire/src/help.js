import React from 'react';
export function isTitleCentre ( element) {
    let curWidth = document.getElementById('root').scrollWidth;
    return({
    stub:curWidth >= 370 ? <div style={{width:"90px"}}>{element} </div> :element,
    text:curWidth >= 370 ? "center" : "start"
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
