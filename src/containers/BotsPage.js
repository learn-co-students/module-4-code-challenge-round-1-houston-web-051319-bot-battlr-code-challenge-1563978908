import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    inArmy: false
}
componentDidMount(){
fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
.then(response => response.json())
  .then(result => this.setState({ bots: result }));
}

sendToArmy = (selectedID) => {
  this.setState({
    bots: this.state.bots.map( bot => {
      if(bot.id === selectedID){
        bot.inArmy = !bot.inArmy
      }
      return bot
    })
  })
}

sendHome = (selectedID) => {
  this.setState({
    bots: this.state.bots.map( bot => {
      if(bot.id === selectedID){
        bot.inArmy = !bot.inArmy
      }
      return bot
    })
  })
}

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots.filter( bot => !bot.inArmy)} sendToArmy={this.sendToArmy}/>
        <YourBotArmy bots={this.state.bots.filter( bot => !bot.inArmy)} sendHome={this.sendHome}/>
      </div>
    );
  }

}

export default BotsPage;
