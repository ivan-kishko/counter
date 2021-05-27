import React, {useEffect, useState} from 'react';
import './Display.css'

type DisplayPropsType = {
    counter: number
    maxValue: number
    minValue: number
    error: boolean
}

export function Display(props: DisplayPropsType) {
    //local state for errormessage
    const [errorMessage, setErrorMessage] = useState<string>('')

    //tracking error to display it when settings are changing
    useEffect(() => {
        if(props.minValue < props.maxValue) {
            setErrorMessage(`enter values and press "set"`)
        } else if(props.minValue >= props.maxValue) {
            setErrorMessage('max value can not be less or equal to min value')
        }
    }, [props.error, props.maxValue, props.minValue])

    return (
        <div className="display">
            <div className={props.counter === props.maxValue ? "counter-max" : "counter"}>
                {props.error ? <h4 className={props.minValue >= props.maxValue? "errorMessageRed" : "errorMessage"}>{errorMessage}</h4> : props.counter}
            </div>
        </div>
    );
}