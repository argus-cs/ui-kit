import React from 'react';

import { IFlexProps } from './types';

import { Container } from './styles';

export const Flex: React.FC<IFlexProps> = ({children, ...props}) => {
    return (
        <Container {...props}>
            { children }
        </Container>
    )
}

Flex.defaultProps = {
    w: '100%',
    h: '100%',
    flow: 'column nowrap; sm:row wrap'
}
