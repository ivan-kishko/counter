import React from 'react';
import './ButtonComponent.css'


type ButtonComponentPropsType = {
    callbackFunction: () => void
    title: string
    disabled?: boolean
}

export function ButtonComponent(props: ButtonComponentPropsType) {
    return (
        <button
            disabled={props.disabled}
            onClick={() => {
                props.callbackFunction()
            }}>{props.title}
        </button>
    );
}