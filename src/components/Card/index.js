import React from "react";
import "./style.css";

function Card(props) {
    return (

        <div className="card">
            <div><img className="avatar" alt={props.last} src={props.image}></img></div>
            <div>{props.title} {props.first} {props.last} </div>
            <div>{props.gender}</div>
            <div>{props.age}</div>
            <div>{props.phone}</div>
            <div className="link">{props.email}</div>
        </div>
    );
}

export default Card;