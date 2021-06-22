import React from 'react';

// types
import { ButtonProps } from './';

// styles
import { Container, Content } from './styles';

export const Button: React.FC<ButtonProps> = ((props) => {
    return (
        <Container {...props}>
            <Content>{ props.label }</Content>
        </Container>
    )
});

Button.defaultProps = {
    color: 'default',
    type: 'button',
    // variant: 'solid',
    disabled: false,
}
