import styled from 'styled-components';

import { TextProps } from './types';

export const TextStyled = styled.p<TextProps>`
    color: ${props => props.color && props.theme.pallete[props.color].main};

    user-select: ${props => props.isSelectable ? 'auto' : 'none'};

    h1& {
        font-size: 2.2rem;
    }

    h2& {
        margin-top: 1.2rem;
    }

    h3& {
        font-size: 1.3rem;
    }
`;
