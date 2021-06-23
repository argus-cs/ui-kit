import styled, {css} from 'styled-components';
import { darken, lighten } from 'polished';

import { ButtonProps } from './';

import { theme } from '../../theme';

export const Container = styled.button<ButtonProps>`
    display: inline-flex;

    cursor: pointer;
    user-select: none;

    appearance: none;
    border: 2px solid transparent;
    outline: 2px solid transparent;
    outline-offset: 2px;

    align-items: center;
    justify-content: center;

    padding: .5rem 2rem;
    border-radius: .25rem;

    vertical-align: middle;

    transition: all .3s;

    background-color: ${props => props.color ? theme.color[props.color] : theme.color.default};
    color: ${ props => props.color ? theme.text[props.color] : 'inherit' };

    ${ props => props.outline && css`
        background-color: transparent;
        color: ${props.color && theme.color[props.color]};
        border-color: ${props.color && theme.color[props.color]};
    `}

    &:hover:not(:disabled) {
        background-color: ${ props => props.color ? darken('0.05', theme.color[props.color]) : 'inherit' };
        color: ${ props => props.color ? theme.text[props.color] : 'inherit' };
    }

    ${ props => props.color == 'default' && css`
        &:hover:not(:disabled) {
            color: ${ theme.text.secondary };
        }
    ` }

    ${props => props.color == 'secondary' && css`

        color: ${ darken('0.05', theme.text[props.color]) };

        &:hover:not(:disabled) {
            background-color: ${ theme.color.primary };
            color: ${ theme.text.primary };
        }
    `}

    &:focus:not(:disabled), &:active:not(:disabled) {
        box-shadow: 0 0 0 3px ${props => (props.color) ? lighten('0.1', theme.outline[props.color]) : 'inherit'};
    }

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
`;

export const Content = styled.span`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
    white-space: nowrap;
`;

/**
 * /* ${props => (props.variant == 'outline') && css`
        background-color: transparent;
        color: ${props.color ? theme.color[props.color] : "#3699ff"};
        border-color: ${props.color ? theme.color[props.color] : "#3699ff"};

        &:hover {
            background-color: ${ darken(0.1, theme.color.bg) };
        }
    `}

    ${props => (props.variant == 'ghost') && css`
        background-color: transparent;
        border-color: transparent;
        color: ${props.color ? theme.color[props.color] : "inherit"};

        &:hover {
            background-color: ${ darken(0.05, theme.color.bg) };
        }
    `}
 */
