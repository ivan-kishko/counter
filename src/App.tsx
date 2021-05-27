import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Controls} from "./components/Controls";
import {Display} from "./components/Display";
import {SettingsDisplay} from "./components/SettingsDisplay";
import {ButtonComponent} from "./components/ButtonComponent";

function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValue, setMinValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(minValue)
    //errors
    const [error, setError] = useState<boolean>(false)

    //maxvalue useEffect
    useEffect(() => {
        let maxAsString = localStorage.getItem("maxValue")
        if (maxAsString) {
            let newMax = JSON.parse(maxAsString)
            setMaxValue(newMax)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [maxValue])

    //minvalue useEffect
    useEffect(() => {
        let minAsString = localStorage.getItem("minValue")
        if (minAsString) {
            let newMin = JSON.parse(minAsString)
            setMinValue(newMin)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }, [minValue])

    //current value useEffect
    useEffect(() => {
        let currentAsString = localStorage.getItem("currentValue")
        if (currentAsString) {
            let newCurrent = JSON.parse(currentAsString)
            setCounter(newCurrent)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("currentValue", JSON.stringify(counter))
    }, [counter])

    //counters logic
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        setError(true)
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
        setError(true)
    }

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(minValue)
    }

    //set counter to start with new values
    const setCounterToStart = () => {
        setCounter(minValue)
        setError(false)
    }

    return (
        <div className="App">
            <div className="settings-wrapper">
                <div className="settings-displays">
                    <SettingsDisplay title={'max value:'} value={maxValue} onChangeCallback={onChangeMaxValue}/>
                    <SettingsDisplay title={'min value:'} value={minValue} onChangeCallback={onChangeMinValue}/>
                </div>
                <div className="settings-buttons">
                    <ButtonComponent title={'set'} callbackFunction={setCounterToStart}
                                     disabled={minValue >= maxValue}/>
                </div>
            </div>
            <div className="counter-wrapper">
                <Display error={error} minValue={minValue} maxValue={maxValue} counter={counter}/>
                <Controls value={counter}
                          maxValue={maxValue}
                          minValue={minValue}
                          error={error}
                          increaseCounter={increaseCounter}
                          resetCounter={resetCounter}/>
            </div>
        </div>
    );
}

export default App;
