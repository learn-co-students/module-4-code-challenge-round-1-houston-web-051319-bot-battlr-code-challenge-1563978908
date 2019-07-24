import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	state = {

	}

	handleClick = () => {
		console.log('hello')
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">

					{/* {console.log(this.props.bots[0])} */}
					{/* {<BotCard sendBots={this.props.bots} />} */}
					{this.props.bots.map(bot => {
						return (
							<BotCard bot={bot} />
						)
					})	
					}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;


