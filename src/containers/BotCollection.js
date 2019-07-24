import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
	state = {
		showDetails: false
	}
  
	handleClick = (bot)=>{
		this.setState({
			showDetails: !this.state.showDetails
		})
	}

  render(){
  	return (
		
  	  	<div className="ui four column grid">
    		<div className="row" >
    		  {this.props.bots.map(bot=>{
				  return <BotCard bot={bot} handleClickArmy={this.props.handleClickArmy}/>
			  })}
    		  Collection of all bots
    		</div>
  	  	</div>

  	);
  }

};

export default BotCollection;
