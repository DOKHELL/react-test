import React, {Component} from "react";
import Radium from "radium";
import './Car.css';

const Car = (props) => {
    const inputClases = ['input'];

    if (props.name !== '') {
        inputClases.push('green')
    } else {
        inputClases.push('red')
    }
    if (props.name.length > 4) {
        inputClases.push('bold');
    }

    return (
        <div className={'Car'}>
            <h3>Сar name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input type="text"
                   onChange={props.onChangeName}
                   value={props.name}
                   className={inputClases.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
};

export default Car;