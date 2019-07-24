import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    Bots: [],
    NewBots: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ Bots: result });
      });
  }

  transfer = id => {
    console.log(id);
    let result = this.state.Bots.find(bot => bot.id === id);
    this.setState({ ...this.state, NewBots: [result] });
  };

  render() {
    return (
      <div>
        <YourBotArmy NewBots={this.state.NewBots} />
        <BotCollection bots={this.state.Bots} transfer={this.transfer} />
      </div>
    );
  }
}

export default BotsPage;
