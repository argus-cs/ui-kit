import React from 'react';

// types
import { StacksProps } from './types';

// styles
import { Container } from './styles';

export const Stacks: React.FC<StacksProps> = ({ children, ...props }) => (
    <Container {...props} >
        { children }
    </Container>
)

Stacks.defaultProps = {
    width: "100%",
    height: "100px",
    gap: 0.5,
    direction: "row",
    justify: "center",
    align: "center",
    wrap: "wrap",
}
