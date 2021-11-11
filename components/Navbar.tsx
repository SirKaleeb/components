import Link from 'next/link'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

import { BsPatchCheckFill } from 'react-icons/bs'
const Logo = styled.span`
  svg {
    height: 48px;
    width: 48px;
  }
`

const LeftLinks = ['Home', 'Components']
const RightLinks = ['About', 'Contact']

const NavbarComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
            {LeftLinks.map(link => (
              <Link href={link.toLowerCase()} key={link}>
                {link}
              </Link>
            ))}
            <Link href="/" passHref>
              <Logo>
                <BsPatchCheckFill />
              </Logo>
            </Link>
            {RightLinks.map(link => (
              <Link href={link.toLowerCase()} key={link}>
                {link}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default NavbarComponent
