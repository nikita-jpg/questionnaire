import { Alert } from "@vkontakte/vkui"
import React from 'react';
import './AlertCloseApp.css'
import vkBridge from '@vkontakte/vk-bridge'
import { useDispatch } from "react-redux";

const AlertCloseApp = ({errorText}) => {

  const dispatch = useDispatch()
  const closeAlert = () => dispatch(AlertCloseApp())

  const cloaseApp = () => {
    vkBridge.send("VKWebAppClose", {"status": "success", "payload": {"name": "test"} });
  }

  return(
    <Alert
    header={"Произошла ошибка"}
    text={errorText}
    actionsLayout={"horizontal"}
    onClose={ () => closeAlert}
    actions={[{
        title: "Закрыть приложение",
        autoclose: true,
        mode: "cancel",
        action: () => cloaseApp()
    }]}
>
</Alert>
  )
}

export default AlertCloseApp