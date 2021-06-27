import React from "react"
import PropTypes from "prop-types"

class App extends  React.Component { // Dont have a return , has a render method
  state = { //data is change
    count: 0
  };

  add = () => { // add() : 즉시, add : 클릭할 때만
    console.log("add");
    this.setState(current => ({ count: current.count +1 }));
  }
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count -1 }));
  }

  render (){
    return (
      <div>
        <h1>The number is : {this.state.count} </h1>
        <button onClick = {this.add}> Add </button> 
        <button>Minus</button>
      </div>
    )
  }
}

export default App;
