export const determineWinner = (playerChoice, computerChoice) => {
  const result = (playerChoice - computerChoice + 3) % 3;

  if (result === 0) {
    return 'TIE';
  } else if (result === 1) {
    return 'YOU WIN';
  } else {
    return 'YOU LOSE';
  }
};
