import React from 'react';

import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from '@mui/material';
import { Assets } from '../../../constants/assets.const.mjs';
import { useTheme } from '@emotion/react';

const RulesDialog = ({ openDialog, closeDialog }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'));

  return (
    <Dialog
      open={openDialog}
      onClose={closeDialog}
      fullWidth
      maxWidth="xs"
      fullScreen={isMobile}>
      <DialogContent
        sx={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <DialogTitle
            sx={{ fontWeight: 700, fontSize: '2rem', color: '#000000' }}>
            RULES
          </DialogTitle>
          <img
            src={Assets?.closeIcon?.icon}
            onClick={closeDialog}
            style={{ cursor: 'pointer' }}
            alt={Assets?.closeIcon?.name}
          />
        </Box>
        <img src={Assets?.rules?.icon} alt={Assets?.rules?.name} />
      </DialogContent>
    </Dialog>
  );
};

export default RulesDialog;
