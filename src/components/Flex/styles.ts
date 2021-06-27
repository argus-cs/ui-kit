import styled from 'styled-components';

import { IFlexProps } from './types';
import { getBreakpointValue } from '../../utils';

export const Container = styled.div<IFlexProps>`
    display: flex;

    flex-flow: ${props => getBreakpointValue(props.flow)};
    flex-direction: ${props => getBreakpointValue(props.direction)};
    flex-wrap: ${props => getBreakpointValue(props.wrap)};

    align-items: ${props => getBreakpointValue(props.align)};
    justify-content: ${props => getBreakpointValue(props.justify)};

    flex-grow: ${props => getBreakpointValue(props.grow)};
    flex-shrink: ${props => getBreakpointValue(props.shrink)};

    gap: ${props => getBreakpointValue(props.gap)};

    width: ${props => getBreakpointValue(props.w)};
    height: ${props => getBreakpointValue(props.h)};

    padding: ${props => getBreakpointValue(props.padding)};
    margin: ${props => getBreakpointValue(props.margin)};

    @media (min-width: ${props => props.theme.breakpoints.sm}) {
        
        flex-flow: ${props => getBreakpointValue(props.flow, 'sm')};
        flex-direction: ${props => getBreakpointValue(props.direction, 'sm')};
        flex-wrap: ${props => getBreakpointValue(props.wrap, 'sm')};

        align-items: ${props => getBreakpointValue(props.align, 'sm')};
        justify-content: ${props => getBreakpointValue(props.justify, 'sm')};

        flex-grow: ${props => getBreakpointValue(props.grow, 'sm')};
        flex-shrink: ${props => getBreakpointValue(props.shrink, 'sm')};

        gap: ${props => getBreakpointValue(props.gap, 'sm')};

        width: ${props => getBreakpointValue(props.w, 'sm')};
        height: ${props => getBreakpointValue(props.h, 'sm')};

        padding: ${props => getBreakpointValue(props.padding, 'sm')};
        margin: ${props => getBreakpointValue(props.margin, 'sm')};

    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        
        flex-flow: ${props => getBreakpointValue(props.flow, 'md')};
        flex-direction: ${props => getBreakpointValue(props.direction, 'md')};
        flex-wrap: ${props => getBreakpointValue(props.wrap, 'md')};

        align-items: ${props => getBreakpointValue(props.align, 'md')};
        justify-content: ${props => getBreakpointValue(props.justify, 'md')};

        flex-grow: ${props => getBreakpointValue(props.grow, 'md')};
        flex-shrink: ${props => getBreakpointValue(props.shrink, 'md')};

        gap: ${props => getBreakpointValue(props.gap, 'md')};

        width: ${props => getBreakpointValue(props.w, 'md')};
        height: ${props => getBreakpointValue(props.h, 'md')};

        padding: ${props => getBreakpointValue(props.padding, 'md')};
        margin: ${props => getBreakpointValue(props.margin, 'md')};

    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        
        flex-flow: ${props => getBreakpointValue(props.flow, 'lg')};
        flex-direction: ${props => getBreakpointValue(props.direction, 'lg')};
        flex-wrap: ${props => getBreakpointValue(props.wrap, 'lg')};

        align-items: ${props => getBreakpointValue(props.align, 'lg')};
        justify-content: ${props => getBreakpointValue(props.justify, 'lg')};

        flex-grow: ${props => getBreakpointValue(props.grow, 'lg')};
        flex-shrink: ${props => getBreakpointValue(props.shrink, 'lg')};

        gap: ${props => getBreakpointValue(props.gap, 'lg')};

        width: ${props => getBreakpointValue(props.w, 'lg')};
        height: ${props => getBreakpointValue(props.h, 'lg')};

        padding: ${props => getBreakpointValue(props.padding, 'lg')};
        margin: ${props => getBreakpointValue(props.margin, 'lg')};

    }

    @media (min-width: ${props => props.theme.breakpoints.xl}) {
        
        flex-flow: ${props => getBreakpointValue(props.flow, 'xl')};
        flex-direction: ${props => getBreakpointValue(props.direction, 'xl')};
        flex-wrap: ${props => getBreakpointValue(props.wrap, 'xl')};

        align-items: ${props => getBreakpointValue(props.align, 'xl')};
        justify-content: ${props => getBreakpointValue(props.justify, 'xl')};

        flex-grow: ${props => getBreakpointValue(props.grow, 'xl')};
        flex-shrink: ${props => getBreakpointValue(props.shrink, 'xl')};

        gap: ${props => getBreakpointValue(props.gap, 'xl')};

        width: ${props => getBreakpointValue(props.w, 'xl')};
        height: ${props => getBreakpointValue(props.h, 'xl')};

        padding: ${props => getBreakpointValue(props.padding, 'xl')};
        margin: ${props => getBreakpointValue(props.margin, 'xl')};

    }
`;
