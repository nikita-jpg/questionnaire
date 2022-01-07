import { Alert } from "@vkontakte/vkui"
import React from 'react';
import './AlertCloseApp.css'
import vkBridge from '@vkontakte/vk-bridge'
import { useDispatch } from "react-redux";

const AlertCloseApp = ({errorText}) => {

  const dispatch = useDispatch()
  const closeAlert = () => dispatch(AlertCloseApp())

  const closeApp = () => {
    console.log("close App")
    vkBridge.send("VKWebAppClose", {"status": "success", "payload": {"name": "test"} });
  }

  return(
    <Alert
    header={"Произошла ошибка"}
    text={errorText}
    actionsLayout={"horizontal"}
    onClose={ () => closeApp()}
    actions={[{
        title: "Закрыть приложение",
        autoclose: true,
        mode: "cancel",
        action: () => closeApp()
    }]}
>
</Alert>
  )
}

export default AlertCloseApp