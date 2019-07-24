import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
	
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
				  return <BotCard bot={bot}  showSpecs={this.props.showSpecs}/>
			  })}
    		  Collection of all bots
    		</div>
  	  	</div>

  	);
  }

};

export default BotCollection;
