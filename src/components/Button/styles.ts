import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { ButtonProps } from './';

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

    ${ props => {

        switch (props.color) {
            case 'primary':
                return BaseButtonWithOutline(props, 'primary');
            case 'secondary':
                return `
                    color: ${props.theme.pallete.secondary.contrastText};
                    background-color: ${props.theme.pallete.secondary.main};

                    &:hover:not(:disabled) {
                        background-color: ${ darken('0.05', props.theme.pallete.primary.main) };
                        color: ${ props.theme.pallete.primary.contrastText };
                    }

                    &:focus:not(:disabled), &:active:not(:disabled) {
                        box-shadow: 0 0 0 3px ${lighten('0.2', props.theme.pallete.primary.main)};
                    }
                `;
            case 'success':
                return BaseButtonWithOutline(props, 'success');
            case 'warning':
                return BaseButtonWithOutline(props, 'warning');
            case 'danger':
                return BaseButtonWithOutline(props, 'danger');
            default:
                return `
                    color: ${props.theme.pallete.common.text};
                    background-color: ${props.theme.pallete.common.main};

                    &:hover:not(:disabled) {
                        background-color: ${ darken('0.05', props.theme.pallete.common.main) };
                        color: ${ props.theme.pallete.primary.main };
                    }

                    &:focus:not(:disabled), &:active:not(:disabled) {
                        box-shadow: 0 0 0 3px ${lighten('0.2', props.theme.pallete.primary.main)};
                    }
                `;
        }

    }}

    &:disabled {
        opacity: .6;
        cursor: not-allowed;
    }
`;

const BaseButtonWithOutline = (props: any, color: string) => `
    color: ${props.outline ? props.theme.pallete[color].main : props.theme.pallete[color].contrastText};
    background-color: ${props.outline ? "transparent" : props.theme.pallete[color].main};
    border-color: ${props.outline ? props.theme.pallete[color].main : "none"};

    &:hover:not(:disabled) {
        background-color: ${ darken('0.05', props.theme.pallete[color].main) };
        color: ${ props.theme.pallete[color].contrastText };
    }

    &:focus:not(:disabled), &:active:not(:disabled) {
        box-shadow: 0 0 0 3px ${lighten('0.2', props.theme.pallete[color].main)};
    }
`;

export const Content = styled.span`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
    white-space: nowrap;
`;
