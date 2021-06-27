export interface IFieldProps {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    value?: string;

    max?: number;

    withCount?: boolean;

    isValid?: boolean;
    isInvalid?: boolean;

    note?: string
}

export interface IControl extends Pick<IFieldProps, "isValid" | "isInvalid"> {
    isFocused?: boolean;
}
