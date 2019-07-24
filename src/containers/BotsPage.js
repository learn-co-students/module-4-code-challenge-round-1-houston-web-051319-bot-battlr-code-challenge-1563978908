import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  // state={
  //   userBots: []
  // }
  
  state={
    bots: []
  }

  addUserBots = (newBot)=>{
    this.setState({
      bots: this.state.bots.map(bot => {
        if(bot.id === newBot.id){
          return {...bot, userBot: !bot.userBot}
        } else {
          return bot
        }
      })
    })
  }

  componentDidMount(){
	  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
		.then(res=> res.json())
			.then(bots=>{
				this.setState({
					bots: bots
				})
			})
	}
  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.bots}/>
        <BotCollection bots={this.state.bots} addUserBots={this.addUserBots}/>
      </div>
    );
  }

}

export default BotsPage;
