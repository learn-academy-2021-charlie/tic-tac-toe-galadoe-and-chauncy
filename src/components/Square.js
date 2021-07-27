import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    //console.log(this.props.index)
    this.props.handleGamePlay(this.props.index)
    // this.props.currentPlayer(this.props.index)
  }

  render(){
    return(
      <>
        <div className="square" onClick={this.handleClick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
