import React from "react";

export default function UserCard({ name, text }) {
    return <div className="card">
        <h3>{name}</h3>
        <hr/>
        <div>{text}</div>
    </div>
}