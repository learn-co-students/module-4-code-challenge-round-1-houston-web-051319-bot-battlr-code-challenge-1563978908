import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs.js"
class BotCollection extends React.Component {
  //your code here

  //treated this more like a functional component should have included the specs state in here / the states methods
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.showingBot ? this.props.allBots.map(bot => <BotCard bot = {bot} handleShowingBot = {this.props.handleShowingBot}/>) : <BotSpecs bot ={this.props.specificBot.bot} addBotToArmy = {this.props.addBotToArmy} stopShowingSpecs = {this.props.stopShowingSpecs}/>}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
