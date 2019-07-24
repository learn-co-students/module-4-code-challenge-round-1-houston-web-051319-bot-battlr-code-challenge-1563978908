import React from "react";
import BotCollection from './BotCollection.js';
import YourBotArmy from './YourBotArmy.js';

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    clickedBots: []
  }


  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then ( res => res.json())
    .then ( bots => {
      this.setState({ 
        bots: bots,
        clickedBots: this.state.clickedBots
      })
    })
  }

  enlistBot(bot) {
    if(this.state.clickedBots.map(clickedBot => clickedBot.id).includes(bot.id)) {
      let newBots = this.state.clickedBots.filter(clickedBot => clickedBot.id !== bot.id)
      this.setState({
        bots: this.state.bots,
        clickedBots: newBots
      })
    }
    else {
    this.state.clickedBots.push(bot)
    this.setState({ 
      bots: this.state.bots,
      clickedBots: this.state.clickedBots
      })
    }
  }


  render() {
    return (
      <div>
      <YourBotArmy clickedBots={this.state.clickedBots} />
      <BotCollection bots={this.state.bots} enlist={(bot) => this.enlistBot(bot)}/>
      </div>
    );
  }

}
export default BotsPage;
