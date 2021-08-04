import React from 'react';

let curWidth = document.getElementById('root').scrollWidth;

export function isTitleCentre ( element) {
    return({
    stub:curWidth >= 370 ? <div style={{width:"90px"}}>{element} </div> :element,
    text:curWidth >= 370 ? "center" : "start"
    })
}

export function getwidthInfo() {
    if(curWidth>1280){
        return {colNumber:"s", maxWidth:"1500px"}
    }
    else if (curWidth>560){
        return {colNumber:"m", maxWidth:"1280px"}
    }
    else {
        return {colNumber:"l", maxWidth:"560px"}
    } 
}
