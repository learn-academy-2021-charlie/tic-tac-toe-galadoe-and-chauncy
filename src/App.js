import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      lose: false,
      win: false,
      player1: true,
      player2: false,
      turn: 1
    }
  }

  handleGamePlay = (index) => {
      const {squares, turn} = this.state

      //if turn is an odd number than its ply1
      //else it is ply2's turn
      if(turn %2 !== 0){
        squares[index] = 'X'
        this.setState({squares: squares, turn: turn+1})
      }
      else{
        squares[index] = 'O'
        this.setState({squares: squares, turn: turn+1})
      }
  }

  render(){
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
                  />
          })}
        </div>
      </>
    )
  }
}
export default App
