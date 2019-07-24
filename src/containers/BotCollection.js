import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	// console.log(this.props.allBots)
	let allBots = this.props.allBots
	// console.log(this.props.recruit)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
			{allBots.map(robot =>{
			 return	<BotCard bot={robot} recruit={this.props.recruit}/>
			})}
			  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
