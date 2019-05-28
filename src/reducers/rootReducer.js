import {
  START_GAME,
  RESET_GAME,
  CHOOSE_NUM,
  CHANGE_TURN,
  ADD_BINGO_ONE,
  ADD_BINGO_TWO,
  FIND_WINNER
} from "../actions/types";


const initState = {
  isPlaying: false, //현재 게임중 여부
  isReset: false, //게임 재시작 여부
  isSelected: [], //숫자 선택한 array
  whoseTurn: "player1", //누구 턴인지
  numBingoOne: [], //1번 플레이어의 빙고판
  numBingoTwo:[],//2번 플레이어의 빙고판
  winner: null //승자
}; 

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GAME: //게임을 시작하면 isPlaying
      return {
        ...state,
        isPlaying: true
      };
    case RESET_GAME: //게임을 재시작하면 선택한 숫자 초기화하고, 1번 플레이어부터 다시 시작한다
      return {
        ...state,
        isReset: true,
        isSelected: [],
        whoseTurn: "player1"
      };
    case CHOOSE_NUM: //숫자 선택하면 계속 append 해준다
      return {
        ...state,
        isSelected: [...state.isSelected, action.num]
      };
    case CHANGE_TURN: //턴 끝날때마다 턴 바꾼다
      return {
        ...state,
        whoseTurn: action.player
      };
    case ADD_BINGO_ONE://플레이어 1의 빙고판에 선택한 숫자 반영한다
      return{
        ...state,
        numBingoOne: action.num,
      }
    case ADD_BINGO_TWO://플레이어 2의 빙고판에 선택한 숫자 반영한다
      return{
        ...state,
        numBingoTwo: action.num,
      }
    case FIND_WINNER:
      return{
        ...state,
        winner: action.player
      }
    default:
      return state;
  }
};

export default rootReducer;
