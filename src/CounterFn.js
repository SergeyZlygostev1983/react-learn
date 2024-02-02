import React, { useState } from "react";
import PropTypes from 'prop-types';

function Counter({ min, max }) {
    let [ current, setCurrent ] = useState(min);

    function inc() {
        if(current < max) {
            setCurrent(current + 1);
        }
    }

    function dec() {
        if(current > min) {
            setCurrent(current - 1);
        }
    }

    function parseCurrent(e) {
        if(e.target.value < max && e.target.value > min) {
            setCurrent(+e.target.value);
        }
    }

    return <div>
        <button type="button" onClick={ () => dec() }>-</button>
        <input type="text" value={ current } onChange={parseCurrent}/>
        <button type="button" onClick={ () => inc() }>+</button>
    </div>
}

Counter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
};

export default Counter;