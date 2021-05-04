import React from "react";
import "./style.css";

function ListItem(props) {
    return (

        <div className="list-item">
            <div><img alt={props.last} src={props.image}></img></div>
            <div>{props.title} {props.first} {props.last} </div>
            <div>{props.age}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default ListItem;