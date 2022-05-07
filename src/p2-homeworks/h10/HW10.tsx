import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {ActionLoadingType, loadingAC} from "./bll/loadingReducer";
import {Dispatch} from "redux";
import {AppStoreType} from "./bll/store";

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const dispatch = useDispatch<Dispatch<ActionLoadingType>>()

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(!isLoading))
        setTimeout(()=>{
            dispatch(loadingAC(isLoading))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
