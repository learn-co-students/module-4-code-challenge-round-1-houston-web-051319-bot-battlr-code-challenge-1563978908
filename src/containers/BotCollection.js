import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
                {this.props.bots.map(bot => {
                    return (
                        <div>
                            <BotCard bot={bot} onClick={() => this.props.sendToArmy(bot.id)}/>
                        </div>
                    )
                })}

            </div>
    		  Collection of all bots
    		</div>
  	)
  }

};

export default BotCollection;
