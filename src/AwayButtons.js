import React from "react";
import "./App.css";

function AwayButtons(props) {
  
    return (
        <div className="awayButtons">
          <button onClick={()=> props.setAwayScore(props.awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={()=> props.setAwayScore(props.awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
    );
}

export default AwayButtons;