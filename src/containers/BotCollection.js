import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

	let allBots = this.props.bots
	console.log(allBots)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			Collection of all bots
    		  {
				allBots.map( bot => (
					<BotCard key={bot.id} bot={bot} onClick={this.props.onClick} />
				))
			  }
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
