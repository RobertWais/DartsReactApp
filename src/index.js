import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const levels = ["","/","//","X"];


function Box(props){
  return (
    <button className="box" onClick = {() => props.onClick()}>
      {levels[props.value%4]}
    </button>
  );
}

function ScoreBox(props){
  return (
    <button className="scoreBox" >
    {props.value}
    </button>
  );
}

class ScoreBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(12).fill(null),
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();

    squares[i] = squares[i] + 1;
    this.setState({
      squares: squares,
    });
  }

  renderScoreBox(i){
    return(
      <ScoreBox value = {i}
        />
    );
  }

  renderBox(i){
      return(
        <Box value = {this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
        />
      );
  }

  render(){
    //  Check for winner
    const winner = checkWinner(this.state.squares);
    if(winner == 1){
        alert("Player 1 wins");
        this.setState({
          squares: Array(12).fill(null),
        });
    }else if (winner == 2) {
        alert("Player 2 wins");
        this.setState({
          squares: Array(12).fill(null),
        });
    }
    return (
    <div>
      <div className="board-row">
        {this.renderBox(5)}
        {this.renderScoreBox(20)}
        {this.renderBox(11)}
    </div>
     <div className="board-row">
     {this.renderBox(4)}
     {this.renderScoreBox(19)}
     {this.renderBox(10)}
     </div>
     <div className="board-row">
     {this.renderBox(3)}
     {this.renderScoreBox(18)}
     {this.renderBox(9)}
     </div>
     <div className="board-row">
     {this.renderBox(2)}
     {this.renderScoreBox(17)}
     {this.renderBox(8)}
     </div>
     <div className="board-row">
     {this.renderBox(1)}
     {this.renderScoreBox(16)}
     {this.renderBox(7)}
     </div>
     <div className="board-row">
     {this.renderBox(0)}
     {this.renderScoreBox(15)}
     {this.renderBox(6)}
     </div>
    </div>
  );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <ScoreBoard />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function checkWinner(boxes){
  //0 No winner Yet
  //1 - Player 1 wins
  //2 - Player 2 wins
  let player1win = true
  for(let i=0; i<6; i++){
    if((boxes[i]%4)!=3){
      player1win = false
      break;
    }
  }

  let player2win = true
  for(let i=6; i<12; i++){
    if((boxes[i]%4)!=3){
      player2win = false
      break;
    }
  }
  if(!player1win && !player2win){
    return 0;
  }
  if(player1win){
    return 1;
  }else{
    return 2;
  }


}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
