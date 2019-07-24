import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	state = {
		
	}



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{this.props.bots.map(bot => {
						return (
							<BotCard bot={bot}/>
						)
					})	
					}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;


