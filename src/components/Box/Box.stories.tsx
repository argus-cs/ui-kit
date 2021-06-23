import React from 'react';
import { Story } from '@storybook/react';

import { Box, IBoxProps } from './';
import { Text } from '../Text';

export default {
    title: "Box",
    component: Box,
}

const Template: Story<IBoxProps> = (args) => (
    <Box {...args}>
        <Text as="p" color="muted">Apenas testes</Text>
    </Box>
)

export const Basic = Template.bind({});
Basic.args = {
    d: "flex",
    align: "center",
    justify: "center",
    w: "280px",
    h: "130px",
    margin: 'auto',
    borderRadius: '.25rem',
    shadow: '0 0 0 2px #3c3c3c',
};
