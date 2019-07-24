import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row" />
          {this.props.NewBots.map(bot => (
            <BotCard
              id={bot.id}
              name={bot.name}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              botClass={bot.botClass}
              avatarUrl={bot.avatar_url}
              catchphrase={bot.catchphrase}
              transfer={this.props.transfer}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
