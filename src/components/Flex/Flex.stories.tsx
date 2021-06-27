import React from 'react'
import { Story } from '@storybook/react';

import { Flex, IFlexProps } from './';

import { Box } from '../Box';

export default {
    title: "Layout/Flex",
    component: Flex,
}

const Template: Story<IFlexProps> = (args) => (
    <Flex {...args}>
        <Box background="primary" h="80px" margin="0" w="80px" />
        <Box background="danger" h="80px" margin="0" w="80px" />
    </Flex>
)

export const Basic = Template.bind({});
Basic.args = { h: '120px', w: '100%', justify: 'space-around', align: 'center', gap: '1rem' };
