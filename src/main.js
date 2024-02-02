import React from "react";
import ReactDOM from "react-dom";
import UserCard from "./UserCard";
import CounterClass from "./CounterClass";
import CounterFn from "./CounterFn";

ReactDOM.render(
    <div className="test">
        <h3>Function max = 7</h3>
        <CounterFn min={3} max={7}/>
        {/* <hr/>
        <h3>Function max = 9</h3>
        <CounterFn min={5} max={9}/>
        <hr/>
        <UserCard name="Petr" text="user"/>
        <UserCard name="Vasya" text="user2"/>
        <UserCard name="Ivan" text="user3"/>
        <hr/>
        <div>test</div> */}
    </div>,
    document.querySelector('.app')
)