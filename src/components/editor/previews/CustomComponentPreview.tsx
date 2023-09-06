import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'


interface Props {
  children: any
}


const CustomComponentPreview = ({ children }: Props) => {
  console.log(children)
  return <Text> {children}</Text>
}



export default CustomComponentPreview