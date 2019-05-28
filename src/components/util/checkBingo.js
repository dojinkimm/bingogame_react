export const checkBingo = arr => {
  var isBingo = false;
  var numBingo = 0;
  let indexArr = [];
  var i, j;
  for (
    i = 0;
    i < 25;
    i++ //index만 담은 array를 생성한다
  )
    if (arr[i] === -1) indexArr.push(i);
  if (indexArr.length > 0) {
    var count;
    for (i = 0; i < 25; i += 5) {
      //index가 담긴 array로 가로줄 빙고를 확인한다
      count = 0;
      for (j = 0; j < 5; j++) {
        if (indexArr.includes(i + j)) count += 1;
      }
      if (count === 5) numBingo += 1;
    }
    for (i = 0; i < 5; i++) {
      //index가 담긴 array로 세로줄 빙고를 확인한다
      count = 0;
      for (j = 0; j < 25; j += 5) {
        if (indexArr.includes(i + j)) count += 1;
      }
      if (count === 5) numBingo += 1;
    }

    count = 0;//index가 담긴 왼위에서 오른쪽아래 대각선방향 빙고 확인한다 
    for (i = 0; i < 25; i += 6) {
      if (indexArr.includes(i)) count += 1;
    }
    if (count === 5) numBingo += 1;

    count = 0;//index가 담긴 오른쪽위에서 왼쪽아래 대각선방향 빙고 확인한다 
    for (i = 4; i < 21; i += 4) {
      if (indexArr.includes(i)) count += 1;
    }
    if (count === 5) numBingo += 1;
  }

  if (numBingo >= 5)
    //빙고 다섯개 이상이면 빙고 완성을 알린다
    isBingo = true;

  return isBingo;
};
