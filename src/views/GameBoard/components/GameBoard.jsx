import React, { useState } from 'react';

import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

import { Assets, GameIcons } from '../../../constants/assets.const.mjs';
import GameIcon from '../../../components/GameIcon';

const GameBoard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [playerSelectedOption, setPlayerSelectedOption] = useState(null);

  const computerChoiceIndex = Math.floor(Math.random() * 3);

  const computerSelectedIcon = GameIcons.find(
    item => item?.index === computerChoiceIndex,
  );

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
            justifyContent: 'space-between',
            maxWidth: '42rem',
            width: '100%',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', sm: 'column' },
              alignItems: 'center',
              gap: '3rem',
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

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', sm: 'column' },
              alignItems: 'center',
              gap: '4rem',
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
              }}
            />
            {/* <GameIcon
              item={computerSelectedIcon}
              size={isMobile ? 'small' : 'large'}
            /> */}
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default GameBoard;
