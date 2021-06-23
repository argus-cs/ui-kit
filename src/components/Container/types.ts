import React from 'react';

import { themeSchema } from '../../theme';

export interface IContainerProps {
    size?: keyof typeof themeSchema.breakpoints;
    margin?: React.CSSProperties['margin'];
    padding?: React.CSSProperties['padding'];
    centralize?: boolean;
}
