import React from 'react';
import './Controls.css'
import {ButtonComponent} from "./ButtonComponent";


type ControlsPropsType = {
    increaseCounter: () => void
    resetCounter: () => void
    value: number
    maxValue: number
    minValue: number
    error: boolean
}

export function Controls(props: ControlsPropsType) {
    return (
        <div className="controls">
            <ButtonComponent disabled={props.value === props.maxValue || props.error} callbackFunction={props.increaseCounter} title={'inc'}/>
            <ButtonComponent disabled={props.value === props.minValue || props.error} callbackFunction={props.resetCounter} title={'reset'}/>
        </div>
    );
}