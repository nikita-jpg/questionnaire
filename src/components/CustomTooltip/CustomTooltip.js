import React, { useCallback, useState } from 'react';
import { Tooltip } from '@vkontakte/vkui';
import "./CustomTooltip.css";

const CustomTooltip = ({children, text, defaultIsShown=false}) => {
    const [isVisible, setIsVisible] = useState(defaultIsShown);

    const open = useCallback(() => {
        setIsVisible(true);
    });

    const close = useCallback(() => {
        setIsVisible(false);
    });

    return (
        <Tooltip
            text={text}
            isShown={isVisible}
            onClose={close}
            cornerOffset={50}
            offsetX={50}
        >
            <span onClick={open}>
                {children}
            </span>
        </Tooltip>
    )
}

export default CustomTooltip;
