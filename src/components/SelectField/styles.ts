import styled from 'styled-components';
import Select from 'react-select';
import { darken } from 'polished';

import { ISelectFieldProps } from './types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    font-weight: 500;

    margin-bottom: 1px;
    padding-left: 1px;
`;

export const StyledSelect = styled(Select)<ISelectFieldProps>`
    
    & .select__control {
        font-size: 0.875rem;

        &:focus:not(:disabled), &:active:not(:disabled) {
            border-color: transparent;
            box-shadow: 0 0 0 2px ${props => props.theme.pallete.accent.main};
        }
    }

`;

