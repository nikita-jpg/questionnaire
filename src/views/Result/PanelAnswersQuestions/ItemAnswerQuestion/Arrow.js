import React from 'react';

export const colorsArrow = {
    GREEN: "GREEN",
    RED: "RED",
    GREY: "GREY"
}

export const directionArrow = {
    UP: "UP",
    DOWN: "DOWN"
}

const Arrow = ({direction, typeColor}) => {
    const getColor = (typeColor) => {
        if (typeColor === colorsArrow.GREEN) {
            return "#79C52D";
        }

        if (typeColor === colorsArrow.RED) {
            return "#E81919";
        }

        return "#858585";
    }

    const styleSVG = {
        transform: `rotate(${direction === directionArrow.UP ?"-180deg" :"0deg"})`,
        transition: "transform 1s"
    }

    const stylePath = {
        transition: "fill 1s"
    }

    return (
        <svg style={styleSVG} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="#303030" />
            <path style={stylePath} fillRule="evenodd" clipRule="evenodd" d="M6.59278 10.8248C7.0137 10.2776 7.7985 10.1753 8.3457 10.5962L13.0002 14.1766L17.6548 10.5962C18.2019 10.1753 18.9868 10.2776 19.4077 10.8248C19.8286 11.372 19.7262 12.1568 19.179 12.5778L13.7624 16.7444C13.313 17.09 12.6874 17.09 12.2381 16.7444L6.82142 12.5778C6.27423 12.1568 6.17186 11.372 6.59278 10.8248Z" fill={getColor(typeColor)} />
        </svg>
    )
}

export default Arrow;
