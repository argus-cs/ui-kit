import styled from 'styled-components';

import { StacksProps } from './types';

export const Container = styled.div<StacksProps>`
    display: flex;

    width: 100%;
    height: 100%;

    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};

    & * + * {
        margin-top: ${props => (props.direction == 'column' || props.direction == 'column-reverse') ? props.spacing : 0}rem;
        margin-right: ${props => (props.direction == 'row' || props.direction == 'row-reverse') ? props.spacing : 0}rem;
        margin-left: ${props => (props.direction == 'row' || props.direction == 'row-reverse') ? props.spacing : 0}rem;
        margin-bottom: ${props => (props.direction == 'column' || props.direction == 'column-reverse') ? props.spacing : 0}rem;
    }
`;
