import React from "react";
import "../Styles/style-bar.css";

const ResultBar = props => {

    const stylePointBar = {
        height:"1em",
        width:`width: ${Math.round(props.porcent)}%` || "0%",
        background:"#000",
        borderRadius:"4px",
        transition:"all 0.2s",
        color: "white"
    }
    return(
        <div className = "style-bar">
            <div style = {stylePointBar}>
                {`${Math.round(props.porcent)}%` || "0%"}
            </div>
        </div>
    );
}


export default ResultBar;