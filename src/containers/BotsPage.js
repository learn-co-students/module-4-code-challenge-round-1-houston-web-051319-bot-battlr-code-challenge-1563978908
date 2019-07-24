import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state={
    bots: [],
    yourBots: [],
    specPage: false,
    specBot: {},
    filter: "All"
  }

  render() {
    let desiredBots = this.state.bots

    if(this.state.filter !== "All"){
      desiredBots = desiredBots.filter( bot => bot.bot_class === this.state.filter)
    }

    switch (this.state.filter) {
      case "Assault":
        desiredBots.sort( (a,b) => b.damage - a.damage );
        break;
      case "Defender":
        desiredBots.sort( (a,b) => b.armor - a.armor );
        break;
      case "Support":
        desiredBots.sort( (a,b) => b.health - a.health );
        break;
      default:
        desiredBots.sort( (a,b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    }

    let pageStuff
    if(this.state.specPage){
      pageStuff= <BotSpecs bot={this.state.specBot} handleSpecs={this.handleSpecs} handleEnlist={this.handleEnlist} />
    }else{
      pageStuff=<div>
        Select Class: <select style={{margin: '10px'}} value={this.state.filter} onChange={(e) => this.setState({ filter: e.target.value })} >
          <option value="All">All</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Support">Support</option>
        </select>
        <BotCollection bots={desiredBots} handleSpecs={this.handleSpecs} />
      </div>
    }
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} handleRemove={this.handleRemove} />
        {pageStuff}
      </div>
    );
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => this.setState({ bots }))
  }

  handleSpecs = (specBot) => {
    this.setState({
      specPage: !this.state.specPage,
      specBot
    })
  }

  handleEnlist = (desiredBot) => {
    let yourIDs = this.state.yourBots.map((bot)=> bot.id)
    if(yourIDs.includes(desiredBot.id)){
      alert("You already have that bot in your army.")
    }else{
      this.setState({ yourBots: [...this.state.yourBots, desiredBot]})
    }
  }

  handleRemove = (desiredBot) => {
    this.setState({ yourBots: this.state.yourBots.filter(bot => bot.id !== desiredBot.id)})
  }

}

export default BotsPage;
