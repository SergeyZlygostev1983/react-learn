import React, {useState} from "react";
import Counter from "./Counter";

export default function() {
    let [ maxTest, setMaxTest ] = useState(10);
    let setMaxTest5 = () => setMaxTest(5);

    return <div className="test">
        <h3>Function max = 7</h3>
        <Counter max={7}/>
        <hr/>
        <h3>Function 20, 50</h3>
        <Counter min={20} max={50}/>
        <hr/>
        <h3>Function max = 10</h3>
        <Counter min={1} max={maxTest}/>
        <hr/>
        <button type="button" onClick={setMaxTest5}>Set 5</button>
    </div>;
}