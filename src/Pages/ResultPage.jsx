import React from "react";
import Header from "../Components/Header";
import Container from "../Components/Container";
import ResultBar from "../Components/ResultBar";
const ResultPage = () => {
    return(
        <>
            <Header title = "Result Page" />
            <Container>
                <ResultBar />
                <ResultBar />
                <ResultBar />
                <ResultBar />
            </Container>
        </>
    )
}

export default ResultPage;