import React from "react";

export default function({onPrev}) {

    return <div>
        <h1>Input data</h1>
        <hr/>
        <button type="button" className="btn btn-primary" onClick={onPrev}>Move to cart</button>
    </div>;
}