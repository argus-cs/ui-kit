import React from 'react';
import { Story } from '@storybook/react';

import { Stacks, StacksProps } from './';

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
        <p style={{background: 'red', padding: '1rem', minWidth: '3rem'}}>TESTE1</p>
        <p style={{background: 'blue', padding: '1rem', minWidth: '3rem'}}>TESTE2</p>
    </Stacks>
);

export const Stack = Template.bind({});
