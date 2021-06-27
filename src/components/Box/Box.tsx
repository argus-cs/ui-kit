import React from 'react';

import { IBoxProps } from './types';

import { Container } from './styles';

export const Box: React.FC<IBoxProps> = (props) => (
    <Container {...props}/>
);

Box.defaultProps = {
    d: 'flex',
}
