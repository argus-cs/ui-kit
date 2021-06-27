import React from 'react';

import { ISelectFieldProps } from './types';

import { Container, StyledSelect, Label } from './styles';

export const SelectField: React.FC<ISelectFieldProps> = ({ label, ...rest }) => {

    return (
        <Container>
            <Label>{label}</Label>
            <StyledSelect className="basic-select" classNamePrefix="select" {...rest} />
        </Container>
    );
}

SelectField.defaultProps = {
    label: 'select',
    name: 'select',
    placeholder: 'Selecione uma opção...',
}
