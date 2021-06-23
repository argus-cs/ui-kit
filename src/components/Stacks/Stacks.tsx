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
    spacing: 0.5,
    direction: "row",
    justify: "center",
    align: "center",
    wrap: "nowwrap"
}
