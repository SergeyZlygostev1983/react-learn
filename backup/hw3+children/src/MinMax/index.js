import React, { useEffect, useRef } from 'react';
import propTypes from './props';
import style from './style.module.css'

MinMaxLazy.propTypes = propTypes;

function MinMaxLazy({ min = 1, max, current, onChange }) {
    let inp = useRef();

    function onKeyPress(e) {
        if(e.key === 'Enter') {
            parseCurrent(e);
        }
    }

    function parseCurrent() {
        let num = parseInt(inp.current.value);
        applyCurrent(isNaN(num) ? min : num);
    }

    function applyCurrent(num) {
        let validNum = Math.max(min, Math.min(max, num));
        inp.current.value = validNum;
        onChange(validNum);
    }

    let inc = () => applyCurrent(current + 1);
    let dec = () => applyCurrent(current - 1);

    useEffect(() => {
        inp.current.value = current;
    }, [current]);

    return <div>
        <button className="btn btn-success" type="button" onClick={ () => dec() }>-</button>
        <input className={style.inp} ref={inp} type="text" defaultValue={ current } onBlur={parseCurrent} onKeyUp={onKeyPress} />
        <button className="btn btn-success" type="button" onClick={ () => inc() }>+</button>
    </div>
}

export default MinMaxLazy;