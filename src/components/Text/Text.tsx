import React from 'react';

import { TextStyled } from './styles';

import { TextProps } from './types';

export const Text: React.FC<TextProps> = (props: TextProps) => <TextStyled {...props} />

Text.defaultProps = {
    as: 'span',
    color: 'muted',
    isSelectable: true,
}
