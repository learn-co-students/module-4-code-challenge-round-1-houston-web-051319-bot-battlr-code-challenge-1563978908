import React from "react";
import BotCard from "../components/BotCard";
import Show from './Show'


class BotCollection extends React.Component {
  //your code here

  state={
	  showDetails:false
  }

 handleShow = () =>{
	 this.setState({
		 showDetails:true
	 })
 }


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.props.botCollection.map(bot=>{
			  {this.state.showDetails ? <Show bot={bot}/>: null}
               return <BotCard  bot={bot}   onShow={this.handleShow} onClick={()=>this.props.onClick()}/>
			  })}
    		  Collection of all bots
			  {/* <Show  details={this.state.show} /> */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
