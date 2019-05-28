import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame, resetGame, addBingoOne, addBingoTwo } from "../actions/BingoActions";
import {random} from "./util/random";
import Board from "./Board";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { //처음에는 0으로 초기화 해준다
      arr1: Array(25).fill(0),
      arr2: Array(25).fill(0)
    };

    this.handleGame = this.handleGame.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleGame() {
    let arr1 = random(); //array에 랜덤한 값을 넣는다
    let arr2 = random();

    this.props.startGame(); //게임을 시작한다

    this.setState({
      arr1,
      arr2
    });

    this.props.addBingoOne(arr1) //빙고판의 현황을 array 넣어준다
    this.props.addBingoTwo(arr2)
  }

  handleRestart(){
    this.props.resetGame()
    this.handleGame()
  }
  render() {
    let { isPlaying } = this.props;
    const beginButton = !isPlaying ? ( //게임 중인지에 따라서 다른 버튼을 보여준다
      <button
        onClick={this.handleGame}
        type="button"
        className="btn btn-primary btn-block"
        style={{ margin: "20px" }}
      >
        START
      </button>
    ) : (
      <button
        onClick={this.handleRestart}
        type="button"
        className="btn btn-primary btn-block"
        style={{ margin: "20px" }}
      >
        RESTART
      </button>
    );

    return (
      <div className="container">
        <div className="row">{beginButton}</div>
        <div className="row">
          {
            //플레이어 1 부분
          }
          <div className="col">
            
            <Board name="player1" array={this.state.arr1} />
          </div>

          {
            //플레이어 1 끝나는 부분
          }

          {
            //플레이어 2 부분
          }
          <div className="col">
            <Board name="player2" array={this.state.arr2} />
          </div>

          {
            //플레이어 2 끝나는 부분
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isReset, isPlaying } = state;
  return {
    isPlaying,
    isReset
  };
};
export default connect(
  mapStateToProps,
  { startGame,resetGame, addBingoOne,addBingoTwo}
)(Home);
