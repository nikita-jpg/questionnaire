import React from 'react';

let curWidth = document.getElementById('root').scrollWidth;

export function isTitleCentre ( element) {
    return({
    stub:curWidth >= 370 ? <div style={{width:"90px"}}>{element} </div> :element,
    text:curWidth >= 370 ? "center" : "start"
    })
}

export function getColNumber() {
    if(curWidth === undefined){
        curWidth = document.getElementById('root').scrollWidth;
    }
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
