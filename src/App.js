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
      count: 0,
      currPlayer: ''
    }
  }

  handleGamePlay = (index) => {
      const {squares, turn, clicked, count} = this.state

      console.log(count);
      if(count == 8){
        alert("No moves left!")
      }
      //if turn is an odd number than its ply1
      //else it is ply2's turn
      if(turn % 2 !== 0){
        this.currentPlayer()
        squares[index] = 'X'
        clicked[index] = 1
        this.calculateWinner()

        this.setState({squares: squares, turn: turn + 1, clicked: clicked, count: count+1})
      }
      else{
        this.currentPlayer()
        squares[index] = 'O'
        clicked[index] = 2

        this.calculateWinner()
        this.setState({squares: squares, turn: turn + 1, clicked: clicked, count: count+1})
      }
  }

  resetGame = () => {
    var squares = ['', '', '', '', '', '', '', '', '']
    var clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var win = false
    var turn = 1
    var count = 0

    this.setState({squares: squares, clicked: clicked, win: win, turn: turn, count: count})
  }

  calculateWinner = () => {
    const {clicked, turn} = this.state
    let winner = ''

    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 8]
    ]

    for(let i=0; i < possibleLines.length; i++){
      let winningRow = possibleLines[i]
      let p1 = winningRow[0]
      let p2 = winningRow[1]
      let p3 = winningRow[2]

      if(clicked[p1] === clicked[p2] && clicked[p1] === clicked[p3] && clicked[p2] === clicked[p3] && clicked[p1] !== 0 && clicked[p2] !== 0 && clicked[p3] !==0 ){
        if(turn % 2 !== 0){
          winner = 'Player 1'
        }
        else{
          winner = 'Player 2'
        }
          alert(`${winner} is the WINNER!`)
          this.setState({win: true})
      }

    }
  }

  currentPlayer = () => {
    var {currPlayer, turn} = this.state

    if(turn % 2 !== 0){
      currPlayer = 'Player 1'
    }
    else{
      currPlayer = 'Player 2'
    }
      this.setState({currPlayer: currPlayer})
  }
  

  render(){
    console.log(this.state.clicked)
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <h3>Current Player: {this.state.currPlayer}</h3>
        <div className = "gameboard">
          {this.state.squares.map((value, index) => {
            return <Square
                      key={index}
                      value={value}
                      index={index}
                      handleGamePlay={this.handleGamePlay}
                      turn={this.state.turn}
                      clicked={this.state.clicked}
                      win={this.state.win}
                  />
          })}
        </div>
          <div className = "resetButton">
            <button onClick = {this.resetGame}>Restart Game!</button>
            <p>Created By: Chauncy & Galadoe</p>
          </div>
      </>
    )
  }
}
export default App
