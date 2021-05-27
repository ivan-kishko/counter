import React, {ChangeEvent} from 'react';
import './SettingsDisplay.css'

type SettingsDisplayPropsType = {
    title: string
    value: number
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
}

export function SettingsDisplay(props: SettingsDisplayPropsType) {
    return (
        <div className="settingsDisplay">
            <div className="title-container">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="input-container">
                <input className="numInput" type="number" min="0" max="100" value={props.value} onChange={props.onChangeCallback}/>
            </div>
        </div>
    )
}