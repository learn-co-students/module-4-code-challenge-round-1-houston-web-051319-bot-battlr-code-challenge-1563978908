import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    armyBots: [],
    selectedBot: "",
    showBotsPage: true
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then( res => {
      return res.json()
    }).then( json => {
      this.setState({allBots: json})
    })
  }

  handleShowDetails = (bot) => {
    this.setState({showBotsPage: !this.state.showBotsPage, selectedBot: bot})
  }

  handleRemoveFromArmy = (bot) => {
    let updatedArmyBotsArr = this.state.armyBots.filter(currBot => {
      return currBot.id !== bot.id
    })
    this.setState({armyBots: updatedArmyBotsArr})
  }

  goBack = () => {
    this.setState({showBotsPage: !this.state.showBotsPage, selectedBot: ""})
  }

  enlist = (bot) => {
    if (this.state.armyBots.filter(currBot => currBot.id === bot.id).length < 1) {
      let updatedArmyBotsArr = this.state.armyBots.concat(bot)
      this.setState({armyBots: updatedArmyBotsArr, showBotsPage: !this.state.showBotsPage, selectedBot: ""})
    }
  }

  render() {
    return (
      <div>
        {<YourBotArmy armyBots={this.state.armyBots} handleClick={this.handleRemoveFromArmy}/>}
        {this.state.showBotsPage?<BotCollection allBots={this.state.allBots} handleClick={this.handleShowDetails}/> : <BotSpecs bot={this.state.selectedBot} goBack={this.goBack} enlist={this.enlist}/>}
      </div>
    );
  }

}

export default BotsPage;
