import styled, { css } from 'styled-components';

import { IContainerProps } from './types';
import { getBreakpointValue } from '../../utils';

export const Content = styled.div<IContainerProps>`
    width: 100%;
    height: 100%;

    margin: ${props => getBreakpointValue(props.margin)};
    padding: 0 .4rem;

    max-width: calc(100% - 10px);

    ${props => props.centralize && css`
        display: flex;
        align-items: center;
        justify-content: center;
    `}

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        max-width: 860px;
        padding: 0 2rem;
        margin: ${props => getBreakpointValue(props.margin, 'sm')};
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        max-width: 920px;
        padding: 0 2rem;
        margin: ${props => getBreakpointValue(props.margin, 'md')};
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        max-width: 980px;
        padding: 0 2rem;
        margin: ${props => getBreakpointValue(props.margin, 'lg')};
    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        max-width: 1040px;
        padding: 0 2rem;
        margin: ${props => getBreakpointValue(props.margin, 'xl')};
    }
`;
