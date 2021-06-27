import React from 'react';
import { Story } from '@storybook/react';

import { Box, IBoxProps } from './';
import { Text } from '../Text';
import { Field } from '../Field';
import { Button } from '../Button';
import { Flex } from '../Flex';

export default {
    title: "Atom/Box",
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

export const Node = () => (
    <Box w="260px" h="320px" flow="row wrap" borderColor="primary" borderRadius=".25rem" >
        <Box w="100%" minH="38px" justify="center" align="center" background="primary" borderWidth=" 0 0 1px 0" borderColor="primary" >
            <Text as="span" color="common" selectable={false} >Example Node</Text>
        </Box>
        <Box flow="column nowrap" w="100%" h="calc(100% - 38px)" padding=".75rem 1rem" >
            <Flex flow="column wrap" grow="1" h="100%" gap=".25rem" >
                <Field name="teste" type="text" label="Formulário" placeholder="Descreva o formulário..." />
                <Field name="mail" type="email" label="Email" placeholder="example@email.com" />
            </Flex>

            <Flex flow="column wrap" grow="1" w="100%" h="40px" >
                <Button label="Analizar" type="button" color="secondary" />
            </Flex>
        </Box>
    </Box>
)
