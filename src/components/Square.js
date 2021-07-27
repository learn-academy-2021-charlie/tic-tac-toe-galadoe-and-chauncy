import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    if(this.props.clicked[this.props.index] === 0 && this.props.win === false){
        this.props.handleGamePlay(this.props.index)
    }
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
