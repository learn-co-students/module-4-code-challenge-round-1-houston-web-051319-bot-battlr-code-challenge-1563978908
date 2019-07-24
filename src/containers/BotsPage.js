import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
import Show from './Show.js'

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    botArray:[],
    atCollection:false
  }

  componentDidMount =() =>{
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(result =>{this.setState({
      botArray:result
    })})
  }

  handleStatusChange = (id) =>{
console.log(id)
  this.setState({
    botArray:this.state.botArray.map(bot =>{
      if(bot.id == id){
        return{...bot,atCollection:!bot.atCollection}
      }
      else{
       return bot
      }
    })
  })
  }

  

  render() {
    let FilteredCollection=this.state.botArray.filter(bot=>!bot.atCollection)
    let FilteredArmy=this.state.botArray.filter(bot =>bot.atCollection)
    return (

      <div>
       
          <div>
          <BotCollection botCollection={FilteredCollection} onClick={this.handleStatusChange}/>
          <YourBotArmy botArmys={FilteredArmy} onClick={this.handleStatusChange} />
          </div>
        
      </div>
    );
  }

}

export default BotsPage;
