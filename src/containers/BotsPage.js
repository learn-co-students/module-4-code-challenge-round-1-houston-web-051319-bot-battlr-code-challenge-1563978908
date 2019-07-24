import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botData: [],
    userBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then( res => res.json())
    .then( result => {
      this.setState({
        botData: result
      })
    })
  }

  handleClick = (bot) => {
    this.setState({
      userBots: [ ...this.state.userBots, bot ]
    })
  }

  render() { 
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} userBots={this.state.userBots}/>
        <BotCollection allBots={this.state.botData} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
