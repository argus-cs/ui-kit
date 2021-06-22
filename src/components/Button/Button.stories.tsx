import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from './';

export default {
    title: "Button",
    component: Button,
    argTypes: {
        label: 'button',
        color: {
            options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
            control: { type: 'select' }
        },
        // variant: {
        //     options: ['solid', 'outline', 'ghost', 'link'],
        //     control: { type: 'select' }
        // },
        type: {
            options: ['button', 'reset', 'submit'],
            control: { type: 'select' }
        },
        disabled: {
            control: { type: 'boolean' }
        }
    },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({});
Basic.args = { label: 'Export', type: 'button', color: 'secondary' };

export const Disabled = Template.bind({});
Disabled.args = { label: 'Disabilitado', color: 'secondary', disabled: true}
