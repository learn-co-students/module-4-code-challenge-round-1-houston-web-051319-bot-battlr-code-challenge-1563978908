import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    armyBots: []
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

  
  handleClick = (bot) => {
    
    let clickedBot = bot
    console.log(clickedBot)
    if (this.state.armyBots.includes(clickedBot)) {
      let currentArmyBots = this.state.armyBots.filter( bot => bot !== clickedBot)
      this.setState({
        armyBots: [...currentArmyBots]
      })
    } else {
      this.setState({
        armyBots: [...this.state.armyBots, clickedBot]
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.armyBots} onClick={this.handleClick} />
        <BotCollection bots={this.state.bots} onClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
