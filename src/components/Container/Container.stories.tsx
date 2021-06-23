import React from 'react';
import { Story } from '@storybook/react';

import { Container, IContainerProps } from './';
import { Box } from '../Box';

export default {
    title: "Container",
    component: Container,
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: { type: 'select' }
        },
        centralize: {
            control: { type: 'boolean' }
        }
    },
}

const Template: Story<IContainerProps> = (args) => (
    <Container {...args}>
        <Box w="100%" h="10rem" background="primary" margin="0" />
    </Container>
);

export const Basic = Template.bind({});
Basic.args = {
    margin: '40px auto',
}
