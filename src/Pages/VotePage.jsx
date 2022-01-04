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
    let newVote = voteCandidateOne || 0;
    setVoteCandidateOne(newVote++)
    localStorage.voteCandidateOne = voteCandidateOne;

  }
  
  const onClickCandidateTwo = () => {
    let newVote = voteCandidateTwo || 0;
    setVoteCandidateTwo(newVote++);
    localStorage.voteCandidateTwo = voteCandidateTwo;


  }
  
  const onClickCandidateThree = () => {
    let newVote = voteCandidateThree || 0;
    setVoteCandidateThree(newVote++);
    localStorage.voteCandidateThree = voteCandidateThree;

  }

  const onClickCandidateFour = () => {
    let newVote = voteCandidateFour || 0;
    setVoteCandidateFour(newVote++);
    localStorage.voteCandidateFour = voteCandidateFour;
  }

  return (   
   <>
      <Header title="Vote President" />
        <Container>
          <CandidateButton 
            candidateName = "Jon Doe" 
            click = {onClickCandidateOne} 
            vote = {voteCandidateOne}/>
          <CandidateButton 
            candidateName = "Fulano" 
            click = {onClickCandidateTwo} 
            vote = {voteCandidateTwo}/>
          <CandidateButton 
            candidateName = "Mengano" 
            click = {onClickCandidateThree} 
            vote = {voteCandidateThree}/>
          <CandidateButton 
            candidateName = "Zutano" 
            click = {onClickCandidateFour} 
            vote = {voteCandidateFour}/>
        </Container>
          
   </>
  );
}

export default VotePage;

