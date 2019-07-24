import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
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

export default BotCollection;
