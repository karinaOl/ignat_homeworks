import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import React, {useState} from "react";
import {requestAPI} from "./RequestAPI";


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)

    const [message, setMessage] = useState("")

    const onClickHandler = () => {
        requestAPI.createRequest(checked)
            .then(data => setMessage(data.errorText))
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <SuperCheckbox checked={checked}
                           onChangeChecked={setChecked}/>
            <SuperButton onClick={onClickHandler}>
                default
            </SuperButton>
            {message}
        </div>
    )
}