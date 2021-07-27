import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    if(this.props.clicked[this.props.index] !== 1){
        this.props.handleGamePlay(this.props.index)
    }else if(this.props.clicked[this.props.index] !== 2){
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
