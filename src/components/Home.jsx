import React from 'react'
import { Box,Image,Heading, Container, Stack} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTranceform:"uppercase",
    p:"4",
    size:"4xl"
}
const Home = () => {
  return (
    <div>
      <Box>
        <MyCarousel />    
        <Container maxW={'container.xl'} maxH={'100vh'} p={16}>
            <Heading textTransform={'uppercase'} py="2"w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                Services
            </Heading>
            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>

            </Stack>
        </Container>
      </Box>
    </div>

  )
}
const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop  interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1}></Image>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Futer</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2}></Image>
            <Heading bgColor={'whiteAlpha.500'} color={'black'}{...headingOptions}>Futer is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3}></Image>
            <Heading bgColor={'blackAlpha.600'} color={'white'}{...headingOptions}>Gaming On Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4}></Image>
            <Heading bgColor={'blackAlpha.600'} color={'white'}{...headingOptions}>Level up! New abilities unlocked.</Heading>
        </Box>
    </Carousel>
)
export default Home
