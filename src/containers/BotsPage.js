import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    specificBot: [],
    myBots: [],
    showingBot: true
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
  //handle my bot army, (YaY can finally have a bot army)
  addBotToArmy = (prop) => {
    this.setState({
      myBots: this.state.myBots.concat(prop),
      showingBot: !this.state.showingBot
    })
  }
  deleteBotFromArmy = (prop) => { 
    let bots = this.state.myBots.filter(bot => {
      return bot.id !== prop.bot.id
    })
    this.setState({
      myBots: bots
    })
  }

  //handle the specs
  handleShowingBot = (prop) => {
    this.setState({
      specificBot: {...prop},
      showingBot: !this.state.showingBot
    })
  }
  stopShowingSpecs = () => {
    this.setState({
      showingBot: !this.state.showingBot
    })
  }

  render() {
    
    return (
      <div>
        {<YourBotArmy myBots = {this.state.myBots} deleteBotFromArmy = {this.deleteBotFromArmy}/>}
        {<BotCollection allBots = {this.state.allBots} specificBot = {this.state.specificBot} addBotToArmy = {this.addBotToArmy} handleShowingBot = {this.handleShowingBot} showingBot = {this.state.showingBot} stopShowingSpecs = {this.stopShowingSpecs}/>}
      </div>
    );
  }

}

export default BotsPage;
