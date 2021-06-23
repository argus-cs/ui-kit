import React from 'react';
import { Story } from '@storybook/react';

import { Text, TextProps } from './';

export default {
    title: "Text",
    component: Text,
    argTypes: {
        color: {
            options: ["primary", "secondary", "success", "warning", "danger", "common", "accent", "highlight", "muted"],
            control: { type: 'select' }
        },
        selectable: {
            control: { type: 'boolean' },
        },
    },
};

const Template: Story<TextProps> = (args) => <Text {...args}>Teste</Text>

export const Basic = Template.bind({});
Basic.args = { as: 'h1' };
