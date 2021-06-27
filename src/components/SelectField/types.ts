import { Props as SelectProps } from 'react-select';

export interface ISelectFieldProps extends SelectProps {
    name: string;
    label: string;
}

export interface ISelectOptions {
    readonly value: string;
    readonly label: string;
}

export interface IGroupedOption {
    readonly label: string;
    readonly options: readonly ISelectOptions[];
}
