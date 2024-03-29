import React, { useContext, useEffect, useState } from 'react';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

import { determineWinner } from '../../../helpers/determineWinner.helper';
import { Assets, GameIcons } from '../../../constants/assets.const.mjs';
import { ScoreContext } from '../../../context/score.context';
import { ResultStatus } from '../../../constants';
import GameIcon from './GameIcon';
import Result from './Result';

const GameBoard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { score, setScore } = useContext(ScoreContext);

  const [playerSelectedOption, setPlayerSelectedOption] = useState(null);
  const [computerSelectedOption, setComputerSelectedOption] = useState(null);
  const [showComputerChoice, setShowComputerChoice] = useState(false);
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const iconsPlacements = {
    Rock: {
      position: 'absolute',
      transform: 'translateX(-50%)',
      bottom: 0,
      left: '50%',
    },
    Paper: {
      position: 'absolute',
      left: '-1rem',
      top: '-2rem',
    },
    Scissors: {
      position: 'absolute',
      right: '-1rem',
      top: '-2rem',
    },
  };

  const iconsPlacementsStyles = {
    Rock: iconsPlacements.Rock,
    Paper: iconsPlacements.Paper,
    Scissors: iconsPlacements.Scissors,
  };

  useEffect(() => {
    setShowResult(false);
    if (playerSelectedOption) {
      setTimeout(() => {
        const computerChoiceIndex = Math.floor(Math.random() * 3);
        const computerSelectedIcon = GameIcons.find(
          item => item?.index === computerChoiceIndex,
        );
        setComputerSelectedOption(computerSelectedIcon);
        setShowComputerChoice(true);
        const winner = determineWinner(
          playerSelectedOption?.index,
          computerChoiceIndex,
        );
        setScore(
          winner === ResultStatus?.win
            ? score + 1
            : winner === ResultStatus?.lose
            ? score - 1
            : score,
        );
        setShowResult(true);
        setResult(winner);
      }, 1500);
    }
  }, [playerSelectedOption]);

  const resetGame = () => {
    setPlayerSelectedOption(null);
    setShowComputerChoice(false);
    setResult('');
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: playerSelectedOption !== null ? 'none' : 'block',
        }}>
        <img src={Assets?.triangle?.icon} />
        {GameIcons?.map(item => (
          <GameIcon
            key={item?.index}
            item={item}
            iconsPlacements={iconsPlacementsStyles[item?.name]}
            setPlayerSelectedOption={setPlayerSelectedOption}
          />
        ))}
      </Box>

      {playerSelectedOption ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: isMobile || !showComputerChoice ? '42rem' : '48rem',
            width: '100%',
            transition: 'max-width 0.3s ease-in-out',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', sm: 'column' },
                alignItems: 'center',
                gap: { xs: '1.5rem', sm: '3rem' },
              }}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.5rem' },
                  letterSpacing: '2px',
                }}>
                YOU PICKED
              </Typography>
              <GameIcon
                item={playerSelectedOption}
                size={isMobile ? 'small' : 'large'}
              />
            </Box>

            {!isMobile && (
              <Box
                sx={{
                  opacity: showResult ? '100%' : '0%',
                  transition: 'opacity 0.5s ease-in-out',
                }}>
                <Box
                  sx={{
                    display: showResult ? 'block' : 'none',
                  }}>
                  <Result result={result} resetGame={resetGame} />
                </Box>
              </Box>
            )}

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', sm: 'column' },
                alignItems: 'center',
                height: '100%',
                gap: showComputerChoice
                  ? { xs: '1.5rem', sm: '3rem' }
                  : { xs: '3rem', sm: '4rem' },
              }}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', sm: '1.5rem' },
                  letterSpacing: '2px',
                }}>
                THE HOUSE PICKED
              </Typography>
              <Box
                sx={{
                  width: { xs: '8rem', sm: '11rem' },
                  height: { xs: '8rem', sm: '11rem' },
                  backgroundColor: 'rgba(23, 34, 64, 40%)',
                  borderRadius: '50%',
                  display: showComputerChoice ? 'none' : 'block',
                }}
              />
              {showComputerChoice ? (
                <GameIcon
                  item={computerSelectedOption}
                  size={isMobile ? 'small' : 'large'}
                />
              ) : (
                <></>
              )}
            </Box>
          </Box>

          {isMobile && (
            <Box
              sx={{
                opacity: showResult ? '100%' : '0%',
                transition: 'opacity 0.5s ease-in-out',
              }}>
              <Box sx={{ display: showResult ? 'block' : 'none' }}>
                <Result result={result} resetGame={resetGame} />
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default GameBoard;
