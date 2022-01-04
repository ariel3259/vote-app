import React,{useState} from "react";
import Header from "../Components/Header";
import Container from "../Components/Container";
import CandidateButton from "../Components/CandidateButton";
import ResultBar from "../Components/ResultBar";

const VotePage = () => {
  const [voteCandidateOne, setVoteCandidateOne] = useState(0);
  const [voteCandidateTwo, setVoteCandidateTwo] = useState(0);
  const [voteCandidateThree, setVoteCandidateThree] = useState(0);
  const [voteCandidateFour, setVoteCandidateFour] = useState(0); 


  const onClickCandidateOne = () => {
    let newVote =  voteCandidateOne + 1 ;
    setVoteCandidateOne(newVote);
    localStorage.setItem("voteCandidateOne", voteCandidateOne);

  }

  const onClickCandidateTwo = () => {
    let newVote = voteCandidateTwo + 1;
    setVoteCandidateTwo(newVote);
    localStorage.setItem("voteCandidateTwo", voteCandidateTwo);
  }
  
  const onClickCandidateThree = () => {
    let newVote = voteCandidateThree + 1;
    setVoteCandidateThree(newVote);
    localStorage.setItem("voteCandidateThree", voteCandidateThree);

  }

  const onClickCandidateFour = () => {
    let newVote = voteCandidateFour + 1 ;
    setVoteCandidateFour(newVote);
    localStorage.setItem("voteCandidateFour", voteCandidateFour);
  }

  return (   
   <>
      <Header title="Vote President" />
        <Container>
          <CandidateButton 
            candidateName = "Jon Doe" 
            click = {onClickCandidateOne} 
            vote = {voteCandidateOne}/>
          <ResultBar 
            porcent = {((voteCandidateOne + voteCandidateTwo + voteCandidateThree + voteCandidateFour) * 100) / voteCandidateOne} />

          <CandidateButton 
            candidateName = "Fulano" 
            click = {onClickCandidateTwo} 
            vote = {voteCandidateTwo}/>
          <ResultBar 
            porcent = {((voteCandidateOne + voteCandidateTwo + voteCandidateThree + voteCandidateFour) * 100) / voteCandidateTwo} />

          <CandidateButton 
            candidateName = "Mengano" 
            click = {onClickCandidateThree} 
            vote = {voteCandidateThree}/>
          <ResultBar 
            porcent = {((voteCandidateOne + voteCandidateTwo + voteCandidateThree + voteCandidateFour) * 100) / voteCandidateThree} />

          <CandidateButton 
            candidateName = "Zutano" 
            click = {onClickCandidateFour} 
            vote = {voteCandidateFour}/>
          <ResultBar 
            porcent = {((voteCandidateOne + voteCandidateTwo + voteCandidateThree + voteCandidateFour) * 100) / voteCandidateFour} />
        </Container>
          
   </>
  );
}

export default VotePage;

