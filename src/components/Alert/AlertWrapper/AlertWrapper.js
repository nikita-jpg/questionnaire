import { Alert } from "@vkontakte/vkui"
import React from 'react';
import './AlertWrapper.css'

const AlertWrapper = ({header, description, leftText = null, children, style, leftFunc = () => { }, rightText, rightFunc = () => { }, onClose = () => { }}) => {

  const leftAction = 
  leftText !== null ?
  {
    title: `${leftText}`,
    autoclose: true,
    mode: 'cancel',
    action: () => leftFunc()
  }
  :null

  const rightAction = 
  {
    title: `${rightText}`,
    autoclose: true,
    mode: 'destructive',
    action: () => rightFunc(),
  }

  let actions = leftAction !== null ? [leftAction, rightAction] : [rightAction];

  return(
    <Alert    
      style={style}
      header={header}
      text={description}
      actionsLayout="horizontal"
      onClose={onClose}
      actions={actions}
      >
        {children}
    </Alert>
  )
}

export default AlertWrapper