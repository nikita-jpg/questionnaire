import React, { useCallback, useState } from 'react';
import "./CustomTooltip.css";
import { ClickAwayListener, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    tooltip: {
        backgroundColor: 'var(--main-therd-bg-color)',
        color: 'var(--text_secondary)',
        maxWidth: 220,
        fontSize: "14px",
        border: "1px solid var(--main-therd-bg-color)"
    },
    arrow: {
        color: 'var(--main-therd-bg-color)',
        '&::before': {
            border: "1px solid var(--main-therd-bg-color)"
        }
    }
}));

const CustomTooltip = ({children, text, defaultIsShown=false}) => {
    const classes = useStyles();

    const [isVisible, setIsVisible] = useState(defaultIsShown);

    const open = useCallback(() => {
        console.log("open")
        setIsVisible(true);
    });

    const close = useCallback(() => {
        console.log("close")
        setIsVisible(false);
    });

    return (
        <ClickAwayListener onClickAway={close}>
            <Tooltip
                title={text}
                disableFocusListener
                disableHoverListener
                arrow
                onClose={close}
                open={isVisible}
                classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
            >
                <span onClick={open}>
                    {children}
                </span>
            </Tooltip>
        </ClickAwayListener>
    )
}

export default CustomTooltip;
