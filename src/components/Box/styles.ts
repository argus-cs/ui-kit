import styled from 'styled-components';

import { IBoxProps } from './types';
import { getBreakpointValue } from '../../utils';

export const Container = styled.div<IBoxProps>`
    
    display: ${props => props.d};

    flex-flow: ${props => getBreakpointValue(props.flow)};

    align-items: ${props => props.align};
    justify-content: ${props => props.justify};

    width: ${props => props.w};
    height: ${props => props.h};

    max-width: ${props => props.maxW};
    max-height: ${props => props.maxH};

    min-width: ${props => props.minW};
    min-height: ${props => props.minH};

    padding: ${props => props.padding};
    margin: ${props => props.margin};

    border-width: ${props => props.borderWidth ?? '2px'};
    border-color: ${props => props.borderColor ? props.theme.pallete[props.borderColor].main : 'transparent'};
    border-style: ${props => props.borderStyle ?? 'solid'};

    border-radius: ${props => props.borderRadius};

    overflow: ${props => props.overflow};
    cursor: ${props => getBreakpointValue(props.cursor)};

    color: ${props => props.background && props.theme.pallete[props.background].contrastText};
    background: ${props => props.background && props.theme.pallete[props.background].main };

    box-shadow: ${props => props.shadow};
`;
