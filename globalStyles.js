import React from 'react';
import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}
    `}
  />
);

export default globalStyles;
