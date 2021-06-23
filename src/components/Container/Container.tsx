import React from 'react';

import { IContainerProps } from './types';

import { Content } from './styles';

export const Container: React.FC<IContainerProps> = (props) => (
    <Content {...props}/>
);

Container.defaultProps = {
    size: 'md',
    margin: '0 auto',
    centralize: false,
}
