import React from "react";
import ReactDOM from "react-dom";
import UserCard from "./UserCard";

ReactDOM.render(
    <div className="test">
        <h1>Ups i did it again</h1>
        <hr/>
        <UserCard name="Petr" text="user"/>
        <UserCard name="Vasya" text="user2"/>
        <UserCard name="Ivan" text="user3"/>
        <hr/>
        <div>test</div>
    </div>,
    document.querySelector('.app')
)