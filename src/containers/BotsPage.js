import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    armyBots: [],
    details: false,
    toggleBot: {}
  }

  componentDidMount () {
    this.getBots()
  }

  getBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then( resp => resp.json() )
        .then( data => {
          this.setState({
            bots: data
          })
        })
  }

  
  toggleArmy = (bot) => {
    let toggleBot = bot
    this.setState({
      bots: this.state.bots,
      armyBots: this.state.armyBots,
      details: !this.state.details,
      toggleBot: toggleBot
    })

    
  }

  goBack = (bot) => {
    console.log('go back!')
    this.setState({
      bots: this.state.bots,
      armyBots: this.state.armyBots,
      details: false,
      toggleBot: {}
    })
  }

  enlist = (bot) => {
    console.log(bot)
    let clickedBot = bot
    console.log(clickedBot)
    if (this.state.armyBots.includes(clickedBot)) {
      let currentArmyBots = this.state.armyBots.filter( bot => bot !== clickedBot)
      this.setState({
        armyBots: [...currentArmyBots]
      })
    } else {
      this.setState({
        armyBots: [...this.state.armyBots, clickedBot],
        details: false
      })
    }
  }

  

  

  render() {

    return (
      <div>
        <YourBotArmy bots={this.state.armyBots} onClick={this.toggleArmy} />
        {this.state.details ? <BotSpecs bot={this.state.toggleBot} goBack={this.goBack} enlist={this.enlist} /> : <BotCollection bots={this.state.bots} onClick={this.toggleArmy} />  }

      </div>
    );
  }

}

export default BotsPage;
