import React from 'react'
import clasess from './Input.css'
const input = (props) => {
    let inputElement = null
    const inputClasess = [clasess.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasess.push(clasess.Invalid)
    }

    switch (props.elementType) {
        case 'input':
            inputElement = (
                <input
                    onChange={props.changed}
                    className={inputClasess.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                />
            )
            break

        case 'textarea':
            inputElement = (
                <textarea
                    onChange={props.changed}
                    className={inputClasess.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                />
            )
            break

        case 'select':
            inputElement = (
                <select
                    onChange={props.changed}
                    className={inputClasess.join(' ')}
                    value={props.value}
                >
                    {props.elementConfig.options.map((option) => {
                        return (
                            <option value={option.value} key={option.value}>
                                {option.displayValue}
                            </option>
                        )
                    })}
                </select>
            )
            break

        default:
            inputElement = (
                <input
                    onChange={props.changed}
                    className={inputClasess.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                />
            )
            break
    }

    return (
        <div className={clasess.Input}>
            <label className={clasess.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input
