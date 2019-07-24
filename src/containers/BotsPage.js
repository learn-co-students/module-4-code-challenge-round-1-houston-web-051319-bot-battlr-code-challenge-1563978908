import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    robots: [],
    recruitedBot:{}
  }


  componentDidMount = () =>{
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(robots =>{
      // console.log(robots)
      this.setState({robots: robots})
    })
  }

  recruit = (id) =>{
    console.log(id)
    console.log(this.state.robots[0].id)
    let r_bot = this.state.robots.find(robot => {return robot.id == id})
    console.log(r_bot)
    this.setState({
      recruitedBot: r_bot
    })
    console.log(this.state.recruitedBot,"beep-boop")
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy recruitedB= {this.state.recruitedBot} />
        <BotCollection allBots={this.state.robots} recruit={this.recruit}/>
      </div>
    );
  }

}

export default BotsPage;
