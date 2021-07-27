import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      clicked: [0, 0, 0, 0, 0, 0, 0, 0, 0], 
      win: false,
      turn: 1,
    }
  }

  handleGamePlay = (index) => {
      const {squares, turn, clicked} = this.state

      //if turn is an odd number than its ply1
      //else it is ply2's turn
      if(turn % 2 !== 0){
        squares[index] = 'X'
        clicked[index] = 1
        this.setState({squares: squares, turn: turn + 1, clicked: clicked})
      }
      else{
        squares[index] = 'O'
        clicked[index] = 2
        this.setState({squares: squares, turn: turn + 1, clicked: clicked})
      }
  }

  render(){
    console.log(this.state.clicked)
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className = "gameboard">
          {this.state.squares.map((value, index) => {
            return <Square
                      key={index}
                      value={value}
                      index={index}
                      handleGamePlay={this.handleGamePlay}
                      turn={this.state.turn}
                      clicked={this.state.clicked}
                  />
          })}
        </div>
      </>
    )
  }
}
export default App
