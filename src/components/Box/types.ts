import React from 'react';

import { themeSchema } from '../../theme';

export interface IBoxProps {

    d?: React.CSSProperties['display'];

    flow?: string;

    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];

    w?: React.CSSProperties['width'];
    h?: React.CSSProperties['height'];

    maxW?: React.CSSProperties['maxWidth'];
    maxH?: React.CSSProperties['maxHeight'];

    minW?: React.CSSProperties['minWidth'];
    minH?: React.CSSProperties['minHeight'];

    padding?: React.CSSProperties['padding'];
    margin?: React.CSSProperties['margin'];

    borderWidth?: React.CSSProperties['borderWidth'];
    borderColor?: keyof typeof themeSchema.pallete;
    borderStyle?: React.CSSProperties['borderStyle'];

    borderRadius?: React.CSSProperties['borderRadius'];

    overflow?: React.CSSProperties['overflow'];
    cursor?: string;

    background?: keyof typeof themeSchema.pallete;

    shadow?: string;
}
