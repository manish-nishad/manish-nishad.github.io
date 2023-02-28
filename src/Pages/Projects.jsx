import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  HStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { SiChakraui, SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { DiJavascript1 } from "react-icons/di";
import nordstromImage from "../Data/nordstrom.com_600x380.jpg";
import bewakoofImage from "../Data/bewakoof.com_600x380.jpg";
import snapdealImage from "../Data/snapdeal_600x380.png";
import firstcryImage from "../Data/Firstcry_600x380.png";
import Github from "./Github";


export default function ProjectsDummy() {
  return (
      <>
      <Heading
          marginTop={20}
          fontWeight={700}
          fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }}
          lineHeight={'110%'}
          align="center">
          Projects
      </Heading>
      <Wrap spacing={50} justify={'center'} marginTop={'20px'}>

      <WrapItem py={6}>
      <Box
      maxW={'600px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Image
        alt={'Hero Image'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        position={''}
        src={firstcryImage}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'} marginTop={'10px'}>
          Roaming Angels (Clone of FirstCry.com)
      </Heading>
      <Text
        marginTop={'10px'}
        textAlign={'justify'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        FirstCry.com - Asia's Largest Online Baby and Kids Store, is India's largest online shop for new mom and baby products, offering top of the line discounts on renowned national & International brands. Some of the most reputed brands available on FirstCry.com. This website can be best viewed in resolution width of 1024 and above.
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <HStack cursor={"pointer"}>
              <Text fontSize={"20px"} fontWeight={700}>Tech Stack  -</Text>
              <FaHtml5 size={30} _hover={"HTML"}/>
              <FaCss3Alt size={30} />
              <DiJavascript1 size={30} />
              <FaReact size={30} />
              <SiRedux size={30} />
              <SiChakraui size={30} />
              <FaNodeJs size={30}/>
              <SiExpress size={30} />
              <SiMongodb size={30}/>
              <VscJson size={30} />
          </HStack>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}>
              <a href="https://github.com/yadavarjun182/kind-bushes-4533" target={"blank"}>Github</a>
              <FaGithub size={25}/>
          </Button>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}
            ><a href="https://roamingangels-yadavarjun182-team.netlify.app/" target={"blank"}>Live</a><AiOutlineRise size={25} />
          </Button>
      </Stack>
    </Box>
      </WrapItem>

      <WrapItem py={6}>
      <Box
      maxW={'600px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Image
        alt={'Hero Image'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        position={''}
        src={snapdealImage}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'} marginTop={'10px'}>
        Fashionista (Clone of Snapdeal.com)
      </Heading>
      <Text
        marginTop={'10px'}
        textAlign={'justify'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform.
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <HStack cursor={"pointer"}>
              <Text fontSize={"20px"} fontWeight={700}>Tech Stack  -</Text>
              <FaHtml5 size={30}/>
              <FaCss3Alt size={30} />
              <DiJavascript1 size={30} />
              <FaReact size={30} />
              <SiRedux size={30} />
              <SiChakraui size={30} />
              <VscJson size={30} />
          </HStack>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}>
              <a href="https://github.com/fahad9988/Fashionista/tree/master/warm-afternoon-3310" target={"blank"}>Github</a>
              <FaGithub size={25}/>
          </Button>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}
            ><a href="darling-mooncake-57603b.netlify.app/" target={"blank"}>Live</a><AiOutlineRise size={25} />
          </Button>
      </Stack>
    </Box>
      </WrapItem>

      <WrapItem py={6}>
      <Box
      maxW={'600px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Image
        alt={'Hero Image'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        position={''}
        src={nordstromImage}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'} marginTop={'10px'}>
          Nordstrom.com Clone
      </Heading>
      <Text
        marginTop={'10px'}
        textAlign={'justify'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. Since 1901, we've been committed to providing our customers with the best possible service—and to improving it every day.
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
      <HStack cursor={"pointer"}>
              <Text fontSize={"20px"} fontWeight={700}>Tech Stack  -</Text>
              <FaHtml5 size={30} />
              <FaCss3Alt size={30} />
              <DiJavascript1 size={30} />
              <FaReact size={30} />
              <SiChakraui size={30} />
              <VscJson size={30} />
          </HStack>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}>
              <a href="https://github.com/MAKNISH/troubled-trousers-6605/tree/main/nordstrom" target={"blank"}>Github</a>
              <FaGithub size={25}/>
          </Button>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}
            ><a href="https://lustrous-shortbread-3a021b.netlify.app" target={"blank"}>Live</a><AiOutlineRise size={25} />
          </Button>
      </Stack>
    </Box>
          </WrapItem>

      <WrapItem py={6}>
      <Box
      maxW={'600px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Image
        alt={'Hero Image'}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        position={''}
        src={bewakoofImage}
      />
      <Heading fontSize={'2xl'} fontFamily={'body'} marginTop={'10px'}>
          Bewakoof.com Clone
      </Heading>
      <Text
        marginTop={'10px'}
        textAlign={'justify'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        Bewakoof is the fashion e-commerce startup that stands out from the rest. It offers a trendy collection of apparel based on dazzling and upbeat designs that resonate with the millennials. This was the spirit on which Bewakoof was founded in 2012.
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <HStack cursor={"pointer"}>
              <Text fontSize={"20px"} fontWeight={700}>Tech Stack  -</Text>
              <FaHtml5 size={30}/>
              <FaCss3Alt size={30} />
              <DiJavascript1 size={30} />
              <VscJson size={30} />
          </HStack>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}>
              <a href="https://github.com/Arun-kumar-fw20-0202/-giving-scene-66" target={"blank"}>Github</a>
              <FaGithub size={25}/>
          </Button>
          <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              position={''}
              _hover={{ bg: 'blue.500' }}
            ><a href="https://clinquant-baklava-8aec62.netlify.app/" target={"blank"}>Live</a><AiOutlineRise size={25} />
          </Button>
      </Stack>
    </Box>
      </WrapItem>

      </Wrap>
      <Github />
  </>
  );
}
