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
            {/* {<BotCard />} */}
            Your Bot Army
            {/* {console.log(this)} */}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
