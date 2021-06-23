import styled from 'styled-components';

import { IBoxProps } from './types';

export const Container = styled.div<IBoxProps>`
    
    display: ${props => props.d};

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

    border-width: ${props => props.borderWidth};
    border-color: ${props => props.borderColor};
    border-style: ${props => props.borderStyle};

    border-radius: ${props => props.borderRadius};

    overflow: ${props => props.overflow};

    background: ${props => props.background && props.theme.pallete[props.background].main };

    box-shadow: ${props => props.shadow};
`;
