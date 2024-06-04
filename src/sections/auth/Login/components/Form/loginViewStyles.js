import { alpha } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

export const loginViewStyles = (theme) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0),
    imgUrl: '/assets/background/overlay_4.jpg',
  }),
  height: 1,
});
