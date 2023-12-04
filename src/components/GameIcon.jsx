import React from 'react';

import { Avatar, Box } from '@mui/material';

const GameIcon = ({
  item,
  iconsPlacements,
  size = 'small',
  setPlayerSelectedOption,
}) => {
  const outerLayerDefaultStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '9rem',
    height: '9rem',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const innerLayerDefaultStyles = {
    backgroundColor: '#e4e4e4',
    boxShadow: '0 -6px 0 #b8b8b8',
    width: '7rem',
    height: '7rem',
    top: '4px',
    borderRadius: '50%',
    ':hover': {
      boxShadow: '0 -4px 0 #b8b8b8',
      top: '2px',
    },
  };

  const iconsOuterLayerStyles = {
    RockOuterLayer: {
      background: 'radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      boxShadow: '0 6px 0 #9d1730',
    },
    PaperOuterLayer: {
      background: 'radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
      boxShadow: '0 6px 0 #2a46c2',
    },
    ScissorsOuterLayer: {
      background: 'radial-gradient( hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      boxShadow: '0 6px 0 #c46b19',
    },
  };

  const styles = {
    Rock: iconsOuterLayerStyles.RockOuterLayer,
    Paper: iconsOuterLayerStyles.PaperOuterLayer,
    Scissors: iconsOuterLayerStyles.ScissorsOuterLayer,
  };

  const defaultStyles = {
    small: {
      outerLayer: { width: '9rem', height: '9rem' },
      innerLayer: { width: '7rem', height: '7rem' },
    },
    large: {
      outerLayer: { width: '14rem', height: '14rem' },
      innerLayer: {
        width: '10rem',
        height: '10rem',
        boxShadow: '0 -8px 0 #b8b8b8',
        ':hover': {
          boxShadow: '0 -6px 0 #b8b8b8',
          top: '2px',
        },
      },
    },
  };

  const chosenStyles = defaultStyles[size];

  const outerLayerStyles = {
    ...outerLayerDefaultStyles,
    ...chosenStyles.outerLayer,
    ...styles[item?.name],
    ...iconsPlacements,
  };

  const innerLayerStyles = {
    ...innerLayerDefaultStyles,
    ...chosenStyles.innerLayer,
  };

  const handleClick = () => {
    if (setPlayerSelectedOption) {
      setPlayerSelectedOption(item);
    }
  };

  return (
    <Box sx={outerLayerStyles}>
      <Avatar sx={innerLayerStyles} onClick={handleClick}>
        <img src={item?.icon} style={{ width: '50%' }} alt={item?.name} />
      </Avatar>
    </Box>
  );
};
export default GameIcon;
