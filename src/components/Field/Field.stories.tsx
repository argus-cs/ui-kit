import React from 'react';
import { Story } from '@storybook/react';

import { Field, IFieldProps } from './';

import { Flex } from '../Flex';
import { Button } from '../Button';
import { Text } from '../Text';
import { SelectField } from '../SelectField';

export default {
    title: 'Form/Field',
    component: Field,
    argTypes: {
        label: 'label',
        placeholder: 'placeholder',
        name: 'name',
        max: 30,
        type: {
            options: ['text', 'number', 'email', 'date'],
            control: { type: 'select' }
        },
        withCount: {
            control: { type: 'boolean' }
        },
        isValid: {
            control: { type: 'boolean' }
        },
        isInvalid: {
            control: { type: 'boolean' }
        },
        note: '',
    },
}

const Template: Story<IFieldProps> = (args) => <Field {...args} />

export const Basic = Template.bind({});
Basic.args = { placeholder: 'Descreva o assunto da demanda...', name: 'assunto', max: 30, label: 'Assunto da demanda' };

export const Form = () => (
    <Flex flow="column nowrap" gap="1rem" >
        <Flex justify="center; sm: flex-start" margin="0 0 .5rem 0" >
            <Text as="h2" isSelectable={false} >Cadastrar</Text>
        </Flex>
        <Flex flow="column nowrap; sm: row nowrap" gap="1rem" >
            <Field type="text" name="nome" label="Nome" max={40} placeholder="Qual seu nome?" />
            <Field type="number" name="idade" label="Idade" placeholder="Qual sua idade?" />
        </Flex>
        <Flex>
            <Field type="email" name="email" label="Email" placeholder="Digite seu email..." max={60} />
        </Flex>
        <Flex>
            <SelectField name="genero" label="Genero" options={[{value: 'm', label: 'Masculino'}, {value: 'f', label: 'Feminino'}]} />
        </Flex>
        <Flex justify="center; sm: space-between" flow="column nowrap; sm: row-reverse nowrap" gap="1rem; sm: 0" >
            <Button label="Salvar" type="button" color="primary"  />
            <Button label="Cancelar" type="button" color="default"  />
        </Flex>
    </Flex>
)
