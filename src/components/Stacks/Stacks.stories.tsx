import React from 'react';
import { Story } from '@storybook/react';

import { Stacks, StacksProps } from './';
import { Button } from '../Button';

export default {
    title: "Stacks",
    component: Stacks,
    argTypes: {
        direction: {
            options: ["column", "column-reverse", "row", "row-reverse"],
            control: { type: 'select' }
        },
        justify: {
            options: ["center", "flex-start", "flex-end", "space-around", "space-between"],
            control: { type: 'select' }
        },
        align: {
            options: ["center", "flex-start", "flex-end", "stretch", "baseline"],
            control: { type: 'select' }
        },
        wrap: {
            options: ["wrap", "nowwrap", "wrap-reverse"],
            control: { type: 'select' }
        },
    },
};

const Template: Story<StacksProps> = (args) => (
    <Stacks {...args}>
        <Button label="Export" color="secondary" type="button" />
        <Button label="Download" color="primary" type="button" />
        <Button label="Remover" color="danger" type="button" outline />
    </Stacks>
);

export const Stack = Template.bind({});
