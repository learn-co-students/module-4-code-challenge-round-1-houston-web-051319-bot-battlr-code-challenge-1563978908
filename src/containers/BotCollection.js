import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
//   state={
// 	  bots: []
//   }

//   componentDidMount(){
// 	  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
// 		.then(res=> res.json())
// 			.then(bots=>{
// 				this.setState({
// 					bots: bots
// 				})
// 			})
// 	}
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot=>(
				  <BotCard bot={bot} showDetails={this.props.showDetails}/>
			  ))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
