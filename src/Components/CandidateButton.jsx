import React from "react";
import "../Styles/candidate-button.css";

const CandidateButton = props => {
 
    const onClickButton = () => {
        props.click()
    }
     
    return(
        <button 
         className="candidate-button"
         onClick = {onClickButton}>
             {props.candidateName}
        </button>
    )
}

export default CandidateButton;