import styled, { css } from 'styled-components';

import { StacksProps } from './types';

export const Container = styled.div<StacksProps>`
    display: flex;

    width: ${props => props.width ?? "100%"};
    height: ${props => props.height ?? "100%"};

    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};

    padding: 1rem;
    overflow: hidden;

    & * + * {
        ${ props => (props.direction == 'row' || props.direction == 'column') && css`
            margin-top: ${props.direction == 'column' ? props.gap : 0}rem;
            margin-left: ${props.direction == 'row' ? props.gap : 0}rem;
        `}

        ${ props => (props.direction == 'row-reverse' || props.direction == 'column-reverse') && css`
            margin-right: ${ props.direction == 'row-reverse' ? props.gap : 0}rem;
            margin-bottom: ${ props.direction == 'column-reverse' ? props.gap : 0}rem;
        `}
    }
`;
