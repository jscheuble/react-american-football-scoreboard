//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Home from "./Home.js";
import Away from "./Away.js";
import HomeButtons from "./HomeButtons.js";
import AwayButtons from "./AwayButtons.js";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Home homeScore = {homeScore} />
          <div className="timer">00:03</div>
          <Away awayScore = {awayScore} />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
      <HomeButtons setHomeScore = {setHomeScore} homeScore = {homeScore} />
      <AwayButtons setAwayScore = {setAwayScore} awayScore = {awayScore} />
      </section>
    </div>
  );
}

export default App;
