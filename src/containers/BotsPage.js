import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    showDetails: false,
    detailBot: []
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
  showSpecs = (bot)=>{
		this.setState({
      showDetails: !this.state.showDetails,
      detailBot: bot
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
        {!this.state.showDetails?<div><YourBotArmy army={this.state.army} handleClickArmy={this.handleClickArmy}/><BotCollection bots={this.state.bots} showSpecs={this.showSpecs} /></div>:<BotSpecs showSpecs={this.showSpecs} bot={this.state.detailBot}handleClickArmy={this.handleClickArmy}/>}
      </div>
    );
  }

}

export default BotsPage;
