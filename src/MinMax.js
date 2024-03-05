import React, { useState } from "react";
import PropTypes from 'prop-types';

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

function MinMax({ min = 1, max, current, onChange }) {

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        onChange(validNum);
        console.log('here');
    }

    function parseCurrent(e) {
        let num = parseInt(e.target.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);

    return <div>
        <button type="button" onClick={ () => dec() }>-</button>
        <input type="text" value={ current } onChange={parseCurrent}/>
        <button type="button" onClick={ () => inc() }>+</button>
    </div>
}

export default MinMax;