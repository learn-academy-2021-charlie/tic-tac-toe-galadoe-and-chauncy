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
      player2: false
    }
  }

  handleGamePlay = (index) => {
      const {squares, player1, player2} = this.state

      if(player1 == true){
        squares[index] = 'X'
        this.setState({squares: squares})
      }else if(player2 == true){
        squares[index] = 'O'
        this.setState({squares: squares})
      }
  }

  currentPlayer = (player) => {
    if(player == true){
      this.state.player1 = true
      this.state.player2 = false
    }else{
      this.state.player1 = false
      this.state.player2 = true
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
                      currentPlayer = {this.currentPlayer}
                      player1 = {this.state.player1}
                      player2 = {this.state.player2}
                  />
          })}
        </div>
      </>
    )
  }
}
export default App
