import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      clicked: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      lose: false,
      win: false,
      turn: 1,
    }
  }

  calculateWinner = () => {
    const {clicked} = this.state.clicked

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
      // const[a, b, c] = possibleLines[i]
      console.log(possibleLines[i]);
      // if(clicked[a] === clicked[b] && clicked[b] === clicked[c] && clicked[a] === clicked[c]){
      //   this.setState({win: true})
      // }
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
