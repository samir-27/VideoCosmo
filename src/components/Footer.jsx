import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, VStack ,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'}color={'white'} >
            <Stack direction={['column','row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>Subscribs to Get Updates</Heading>
                    <HStack borderBottom={'2px solid white'} py={'2'}>
                        <Input  placeholder='Enter Email Hear ...' border={"none"} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                        <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={'20'}/>
                        </Button>
                    </HStack>
                </VStack> 
                <VStack w={'full'}borderRight={['none','1px solid white'] } borderLeft={['none','1px solid white'] }>
                    <Heading  textTransform={'uppercase'} textAlign={'center'}>VideoCosmo</Heading>
                    <Text>All rights received</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                    <Button variant={'link'} colorScheme='white'>
                        <a target='_blank' href="https://www.youtube.com">YouTube</a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
                        <a target='_blank' href="https://www.linkedin.com">LinkedIn</a>
                    </Button>
                    <Button variant={'link'} colorScheme='white'>
                        <a target='_blank' href="https://www.github.com">GitHub</a>
                    </Button>
                </VStack>
            </Stack>
      </Box>
    </div>
  )
}

export default Footer
