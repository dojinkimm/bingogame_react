import {
  START_GAME,
  RESET_GAME,
  CHOOSE_NUM,
  CHANGE_TURN,
  ADD_BINGO_ONE,
  ADD_BINGO_TWO
} from "./types";

export const startGame = () => { // 게임시작
  return {
    type: START_GAME,
  };
};
export const resetGame = () => { //게임 재시작
  return {
    type: RESET_GAME
  };
};
export const chooseNumber = (num) => { //빙고판 숫자 선택시
  return {
    type: CHOOSE_NUM,
    num
  };
};
export const changeTurn = (player) => { //턴 바꿀시
    return {
      type: CHANGE_TURN,
      player
    };
  };
export const addBingoOne = (num) =>{ //플레이어1의 빙고판 변화시
  return{
    type: ADD_BINGO_ONE,
    num
  }
}
export const addBingoTwo = (num) =>{ //플레이어2의 빙고판 변화시
  return{
    type: ADD_BINGO_TWO,
    num
  }
}

