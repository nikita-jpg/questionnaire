import React from 'react';
import { useSelector } from 'react-redux';
import { getCurWidth } from './Additional/selectors';

export const isTitleCentre = (curWidth) => {
    return({
    // stub:curWidth >= 370 ? <div style={{width:"90px"}}>{element} </div> :element,
    text:curWidth >= 370 ? "center" : "start"
    })
}

export const getWidthInfo = (curWidth) => {

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
