import React, { useState } from 'react';

import { Button } from '@mui/material';
import RulesDialog from './RulesDialog';

const RulesButton = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          position: 'absolute',
          bottom: { xs: '2rem', sm: '1rem' },
          right: { xs: '50%', sm: '1rem' },
          transform: { xs: 'translateX(50%)', sm: 'none' },
          letterSpacing: '2px',
          width: '6rem',
        }}>
        RULES
      </Button>
      <RulesDialog openDialog={openDialog} closeDialog={handleClose} />
    </>
  );
};

export default RulesButton;
