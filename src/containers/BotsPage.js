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

  handleClick = () => {
    console.log('clicked the bot')
  }

  render() {
    return (
      <div>
        <BotCollection allBots={this.state.botData} handleClick={this.handleClick}/>
        <YourBotArmy />
      </div>
    );
  }

}

export default BotsPage;
