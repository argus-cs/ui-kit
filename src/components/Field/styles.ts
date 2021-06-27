import styled from 'styled-components';

import { IFieldProps, IControl } from './types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-bottom: 1rem;

    span {
        font-size: .875rem;

        padding-left: 1px;
        margin-top: 2px;

        opacity: .7;
    }
`;

export const Label = styled.label`
    font-weight: 500;

    margin-bottom: 1px;
    padding-left: 1px;
`;

export const InputControl = styled.div<IControl>`
    display: flex;
    
    align-items: center;

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.isFocused ? props.theme.pallete.accent.main : 'hsl(0, 0%, 80%)'};

    border-radius: 4px;

    transition: all .3s;

    box-shadow: 0 0 0 1px ${props => props.isFocused ? props.theme.pallete.accent.main : 'transparent'};

    &:hover {
        border-color: ${props => props.isFocused ? props.theme.pallete.accent.main : 'hsl(0, 0%, 70%)'};
    }

    ${props => props.isValid && `
        border-color: ${props.theme.pallete.success.main};
        box-shadow: 0 0 0 1px ${props.theme.pallete.success.main};

        &:hover {
            border-color: ${props.theme.pallete.success.main};
        }
    `}

    ${props => props.isInvalid && `
        border-color: ${props.theme.pallete.danger.main};
        box-shadow: 0 0 0 1px ${props.theme.pallete.danger.main};

        &:hover {
            border-color: ${props.theme.pallete.danger.main};
        }
    `}
`;

export const StyledInput = styled.input<IFieldProps>`
    width: 100%;
    min-height: 38px;

    border: 0;
    outline: 0;

    font-size: 0.875rem;

    padding: .4rem .8rem;

    background: transparent;
`;

export const InputCount = styled.div`
    height: 100%;
    padding: 0 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    opacity: .8;

    font-size: 0.75rem;
`;
