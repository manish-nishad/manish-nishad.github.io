import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Link,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ColorModeToggle from './ColorModeToggle';
import img from "../Data/mn-logo.jpg";


// const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const NavLink = ({children}) => (
  <Link
    fontSize={'18px'}
    fontWeight={700}
    px={3}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'blue.700'),
    }}
    >
    {children}
  </Link>
);

export default function Navbar({handleHome, handleAbout, handleSkills, handleProjects, handleContacts}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.50', 'blue.900')} px={4} position={'fixed'} zIndex={3}  width={'100%'} >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Avatar
                size={'lg'}
                src={img}
                link={'https://maknish.github.io'}
                cursor="pointer"
            />
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>

            <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
             <Box onClick={handleHome}> <NavLink>Home</NavLink></Box>
             <Box onClick={handleAbout}>  <NavLink>About</NavLink></Box>
             <Box onClick={handleSkills}> <NavLink>Skills</NavLink></Box>
             <Box onClick={handleProjects}> <NavLink>Projects</NavLink></Box>
             <Box onClick={handleContacts}>    <NavLink>Contacts</NavLink></Box>
             <Box><NavLink><Link href='https://drive.google.com/file/d/13qjwZkSn8jyAPmQKP2FUjQHi83__Tzgr/view?usp=share_link'>Resume</Link></NavLink></Box>
             
            </HStack>
            </Menu>
          <ColorModeToggle />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink><Box onClick={handleAbout}>About</Box></NavLink>
              <NavLink><Box onClick={handleHome}>Home</Box></NavLink>
              <NavLink><Box onClick={handleSkills}>Skills</Box></NavLink>
              <NavLink><Box onClick={handleProjects}>Projects</Box></NavLink>
              <NavLink><Box onClick={handleContacts}>Contacts</Box></NavLink>
              <NavLink><Link href='https://drive.google.com/file/d/13qjwZkSn8jyAPmQKP2FUjQHi83__Tzgr/view?usp=share_link'>Resume</Link></NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}