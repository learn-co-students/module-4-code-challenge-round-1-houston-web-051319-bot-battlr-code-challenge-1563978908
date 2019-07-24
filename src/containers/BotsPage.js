import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botData: [],
    userBots: [],
    showSpecs: false 
  }


  displaySpecs = () => {
    this.setState({
      showSpecs: !false
    })
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
    if(this.state.userBots.filter(userBot => {
    return  !userBot.id === bot.id
    }))
    this.setState({
      userBots: [ ...this.state.userBots, bot ]
    })
  }



  render() { 
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} userBots={this.state.userBots}/>
        <BotCollection allBots={this.state.botData} handleClick={this.handleClick} displaySpecs={this.displaySpecs}/>
      </div>
    );
  }

}

export default BotsPage;
