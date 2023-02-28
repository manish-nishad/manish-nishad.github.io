import '../Styles/Skills.css';
import {
    Box,
    Center,
    Heading,
    Image,
    Wrap,
    WrapItem
  } from '@chakra-ui/react';
  
  
  export default function Sklls() {
    return (
        <>
        <Box textAlign={'center'}>
        <Heading
            fontWeight={700}
            fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }}
            lineHeight={'110%'}>
            Skills
          </Heading>
        </Box>
    
      <Center py={12}>
        <Wrap spacing={'40px'} justify='center' width={'90%'}>
            <WrapItem className='img-1'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-2'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-3'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-4'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-5'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-6'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-7'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-8'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-9'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-10'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-11'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-12'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
            <WrapItem className='img-13'>
                <Center w='120px' h='120px'>
                <Image
                    height={'100%'}
                    width={'100%'}
                    objectFit={'cover'}
                    src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"}
                    />
                </Center>
            </WrapItem>
        </Wrap>
      </Center>
      </>
    );
  }