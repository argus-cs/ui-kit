import React from 'react';
import { Story } from '@storybook/react';

import { Text, TextProps } from './';

export default {
    title: "Atom/Text",
    component: Text,
    argTypes: {
        color: {
            options: ["primary", "secondary", "success", "warning", "danger", "common", "accent", "highlight", "muted"],
            control: { type: 'select' }
        },
        isSelectable: {
            control: { type: 'boolean' },
        },
    },
};

const Template: Story<TextProps> = (args) => <Text {...args}>Teste</Text>

export const Basic = Template.bind({});
Basic.args = { as: 'h1' };

const TestTemplate: Story<TextProps> = (args) => (
    <Text {...args}>
        teste de text dentro de <Text as="strong" color="danger">Texto</Text>
    </Text>
)

export const Test = TestTemplate.bind({});
Test.args = { as: 'p' };
