import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  // state={
  //   userBots: []
  // }
  
  state={
    bots: [],
    bot: {},
    botDetails: false
  }

  showDetails = (newBot) => {
    this.setState({
      bot: newBot,
      botDetails: !this.state.botDetails
    })
  }
  addUserBots = (newBot)=>{ 
    this.setState({
      bots: this.state.bots.map(bot => {
        if(bot.id === newBot.id){
          return {...bot, userBot: true}
        } else {
          return bot
        }
      }),
      bot: {},
      botDetails: !this.state.botDetails
    })
  }
  removeUserBots = (newBot)=>{
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
        <YourBotArmy bots={this.state.bots} addUserBots={this.removeUserBots}/>
        {this.state.botDetails ? <BotSpecs bot={this.state.bot} addUserBots={this.addUserBots} showDetails={this.showDetails}/> : <BotCollection bots={this.state.bots} showDetails={this.showDetails}/>}
      </div>
    );
  }

}

export default BotsPage;
