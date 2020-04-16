import React, { useState } from "react";
import Game from "./game";
import Results from "./Results";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import './App.css';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: '15%',
    height: "50vh",
    textAlign: "center",
  },
}));

export default function App() {
  const [history, setHistory] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const totalQuestions = 4;
  const classes = useStyles();

  function updateHistory(history) {
    setHistory(history);
  }

  function resetGame() {
    setHistory([]);
    setShowResults(false);
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm" fixed>
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center"
        >
          {showResults ? (
            <Results history={history} resetHandler={resetGame} />
          ) : (
            <Game
              finishedHandler={() => setShowResults(true)}
              history={history}
              historyChanged={updateHistory}
              totalQuestions={totalQuestions}
            />
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
