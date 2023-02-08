'use client'
import React from 'react'
import {Box, HStack, Text, Icon, StackProps} from '@chakra-ui/react'
import { CheckIcon } from '../icons/Icons'

const ListItem = (props:StackProps) => {
    const {children, ...rest} = props
  return (
    <Box>
        <HStack as='li' {...rest} spacing='20px'>
            <Icon as={CheckIcon} w='2px' h='22px' />
            <Text>{children}</Text>
        </HStack>
    </Box>
  )
}

export default ListItem