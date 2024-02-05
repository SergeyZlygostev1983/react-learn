import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired
};

function Counter({ min = 3, max }) {
    let [ current, setCurrent ] = useState(min);

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        setCurrent(validNum);
    }

    function parseCurrent(e) {
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);

    useEffect(() => {
        applyCurrent(current);
    }, [min, max]);

    return <div>
        <button type="button" onClick={ () => dec() }>-</button>
        <input type="text" value={ current } onChange={parseCurrent}/>
        <button type="button" onClick={ () => inc() }>+</button>
    </div>
}

export default Counter;