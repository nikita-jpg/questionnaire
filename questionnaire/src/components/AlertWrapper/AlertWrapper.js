import { Alert } from "@vkontakte/vkui"
import React from 'react';

const AlertWrapper = ({header, description, leftText, leftFunc = () => { }, rightText, rightFunc = () => { }, onClose = () => { }}) => {
  // console.log(leftText)
  return(
    <Alert         
      header={header}
      description={description}
      actionsLayout="horizontal"
      onClose={onClose}
      actions={[{
          title: `${leftText}`,
          autoclose: true,
          mode: 'cancel',
          action: () => {leftFunc()}
        }, {
          title: `${rightText}`,
          autoclose: true,
          mode: 'destructive',
          action: () => {rightFunc()},
        }]}
      >
    </Alert>
  )
}

export default AlertWrapper