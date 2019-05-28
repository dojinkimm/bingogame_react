import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTurn, chooseNumber,addBingoOne,addBingoTwo, findWinner } from "../actions/BingoActions";
import {checkBingo} from "./util/checkBingo";
import '../App.css'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { //Home에서 이름을 전달한 것을 보고 어떤 플레이어의 빙고판인지 인식한다
      name: props.name
    };
  }

  handleClick(value) {
    //내가 누른 숫자를 전달한다
    if (this.props.isPlaying) { //현재 게임을 하는 중일 때만 클릭이 가능하게 한다
      if(this.state.name===this.props.whoseTurn){ //내 차례일때만 클릭이 유효하게 한다
        this.props.chooseNumber(value) //선택된 숫자 array늘린다
        this.props.changeTurn(this.state.name==='player1'?'player2':'player1') //순서를 변경한다

        var ar = [...this.props.numBingoOne] //1번 플레이어의 array를 가지고 와서 누른 값과 일치한 인덱스를 -1로 설정해서 클릭됬음을 인식한ㄴ다
        ar[ar.indexOf(value)] = -1
        this.props.addBingoOne(ar)
        ar = [...this.props.numBingoTwo] //2번 플레이어의 array를 가지고 와서 누른 값과 일치한 인덱스를 -1로 설정해서 클릭됬음을 인식한ㄴ다
        ar[ar.indexOf(value)] = -1
        this.props.addBingoTwo(ar)
      
      }else{//내 차례가 아닌데 클릭을 하면 알림이 뜬다
        window.confirm("잘못된 차례입니다")
      }
    }
  }

  componentWillReceiveProps(next) {
    var pl1 = checkBingo(next.numBingoOne)
    var pl2 = checkBingo(next.numBingoTwo)
    if(pl1 && pl2){
      this.props.findWinner("BOTH")
    }else if(pl1){
      this.props.findWinner("1P")
    }else if(pl2){
      this.props.findWinner("2P")
    }
  }
  
  render() {
    const {isSelected} = this.props;
    return (
      <div className="board">
        {this.props.array.map((box, index) => { //isSelected array에 있다면, 클릭된 것이기에 다르게 표현한다
          return isSelected.includes(box)?(
            <div key={index} className="square">
                <h4 className="text-primary selected">X</h4>
            </div>
          ):(//isSelected array에 없으면 숫자를 그대료 표시해준다
            <div
              key={index}
              className="square"
              onClick={() =>
                box!==0 ? this.handleClick(box) : null
              }
            >
              {box === 0 ? "" : box}
            </div>
          );
          
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isSelected, whoseTurn, isPlaying, numBingoOne, numBingoTwo, winner } = state;
  return {
    isPlaying,
    isSelected,
    whoseTurn,
    numBingoOne,
    numBingoTwo,
    winner
  };
};

export default connect(
  mapStateToProps,
  {chooseNumber, changeTurn, addBingoOne, addBingoTwo, findWinner}
)(Board);
