import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  state = {

  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/* On click, rander a botcard */}
            {/* {<BotCard />} */}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
