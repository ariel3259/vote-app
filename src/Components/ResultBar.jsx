import React from "react";

const ResultBar = props => {
    const styleBar = {
        height:"25px",
        width:"90%",
        background:"white",
        marginLeft:"50px",
        borderRadius:"8px",
        padding:"10px"
    }

    const stylePointBar = {
        height:"1.5em",
        width:props.porcent || "0%",
        background:"#000",
        borderRadius:"8px",
        transition:"all 0.2s",
        color:"white"
    }
    return(
        <div style = {styleBar}>
            <div style = {stylePointBar}>
                {props.porcent || "0%"}
            </div>
        </div>
    );
}


export default ResultBar;