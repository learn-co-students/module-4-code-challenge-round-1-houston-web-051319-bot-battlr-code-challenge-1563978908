import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots: [],
    yourBots: []
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} handleRemove={this.handleRemove} />
        <BotCollection bots={this.state.bots} handleEnlist={this.handleEnlist} />
        {/* put your components here */}
      </div>
    );
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => this.setState({ bots }))
  }

  handleEnlist = (desiredBot) => {
    let yourIDs = this.state.yourBots.map((bot)=> bot.id)
    if(yourIDs.includes(desiredBot.id)){
      alert("You already have that bot in your army.")
    }else{
      this.setState({ yourBots: [...this.state.yourBots, desiredBot]})
    }
  }

  handleRemove = (desiredBot) => {
    this.setState({ yourBots: this.state.yourBots.filter(bot => bot.id !== desiredBot.id)})
  }

}

export default BotsPage;
