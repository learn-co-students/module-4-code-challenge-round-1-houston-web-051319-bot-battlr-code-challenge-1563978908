import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    myBots: []
  }

  componentDidMount (){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allBots: data
      })
    })
  }
  addBotToArmy = (prop) => {
    this.setState({
      myBots: this.state.myBots.concat(prop)
    })
  }
  deleteBotFromArmy = (prop) => {
    let bots = this.state.myBots.filter(bot => {
      return bot.id !== prop.id
    })
    this.setState({
      myBots: bots
    })
  }

  render() {
    return (
      <div>
        {<YourBotArmy myBots = {this.state.myBots} deleteBotFromArmy = {this.deleteBotFromArmy}/>}
        {<BotCollection allBots = {this.state.allBots} addBotToArmy = {this.addBotToArmy}/>}
      </div>
    );
  }

}

export default BotsPage;
