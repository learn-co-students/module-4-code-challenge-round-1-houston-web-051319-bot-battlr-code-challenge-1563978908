import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: []
  }
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(rsp=>rsp.json())
    .then(result=>{
      this.setState({
        bots: result
      })
    })
  }

  handleClickArmy = (robot)=>{
    if (this.state.army.includes(robot)){
      let newArray = this.state.army.filter((soldier)=> soldier.id !== robot.id)
      this.setState({
        army: newArray
      })
    }else{this.setState({
             army: [...this.state.army, robot]
          })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} handleClickArmy={this.handleClickArmy}/>
        <BotCollection bots={this.state.bots} handleClickArmy={this.handleClickArmy}/>
      </div>
    );
  }

}

export default BotsPage;
