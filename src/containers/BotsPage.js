import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    armyBots: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then( res => {
      return res.json()
    }).then( json => {
      this.setState({allBots: json})
    })
  }

  handleAddToArmy = (bot) => {
    if (this.state.armyBots.filter(currBot => currBot.id === bot.id).length < 1) {
      let updatedArmyBotsArr = this.state.armyBots.concat(bot)
      this.setState({armyBots: updatedArmyBotsArr})
    }
  }

  handleRemoveFromArmy = (bot) => {
    let updatedArmyBotsArr = this.state.armyBots.filter(currBot => {
      return currBot.id !== bot.id
    })
    this.setState({armyBots: updatedArmyBotsArr})
  }

  render() {
    return (
      <div>
        {<YourBotArmy armyBots={this.state.armyBots} handleClick={this.handleRemoveFromArmy}/>}
        {<BotCollection allBots={this.state.allBots} handleClick={this.handleAddToArmy}/>}
      </div>
    );
  }

}

export default BotsPage;
