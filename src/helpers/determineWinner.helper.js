import { ResultStatus } from '../constants';

export const determineWinner = (playerChoice, computerChoice) => {
  const result = (playerChoice - computerChoice + 3) % 3;

  if (result === 0) {
    return ResultStatus?.tie;
  } else if (result === 1) {
    return ResultStatus?.win;
  } else {
    return ResultStatus?.lose;
  }
};
