import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from './';
import { Container } from '../Container';

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
        outline: {
            control: { type: 'boolean' }
        },
        disabled: {
            control: { type: 'boolean' }
        }
    },
    // decorators: [
    //     (Story: any) => (
    //       <Container centralize margin="40px auto">
    //         <Story />
    //       </Container>
    //     ),
    //   ],
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({});
Basic.args = { label: 'Export', type: 'button', color: 'secondary' };

export const Outline = Template.bind({});
Outline.args = { ...Basic.args, label: 'Outline', color: 'primary', outline: true };

export const Disabled = Template.bind({});
Disabled.args = { ...Basic.args, disabled: true}
