import React from 'react';

import { SelectField, ISelectOptions} from './';

export default {
    title: 'Form/SelectField',
    component: SelectField
}

const options: ISelectOptions[] = [
    { value: '1', label: 'FBB' },
    { value: '2', label: 'ARG' },
];

export const Basic = () => <SelectField label="Demandante" name="teste-select" options={options} />
