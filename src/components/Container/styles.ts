import styled, { css } from 'styled-components';

import { IContainerProps } from './types'

export const Content = styled.div<IContainerProps>`
    width: 100%;
    height: 100%;

    margin: ${props => props.margin};
    padding: ${props => props.padding};

    max-width: ${props => props.size && props.theme.breakpoints[props.size]};

    ${props => props.centralize && css`
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`;
