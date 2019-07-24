import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    let armyBots = this.props.bots

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
            {
              armyBots.map( bot => (
                <BotCard key={bot.id} bot={bot} onClick={this.props.onClick} />
              ))
            }
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
