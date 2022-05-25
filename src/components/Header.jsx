import { Flex, Text, Image } from "@chakra-ui/react"
import ColorMode from "./ColorMode"
import icon from '../assets/studioGhibli.png'

const Header = ({ text }) => {
    return(
        <Flex justify='space-between'>
            <Flex>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    paddingBottom='7'
                >
                    {text}
                </Text>
                <Image src={icon} boxSize='100px' objectFit='contain' paddingTop='3' paddingLeft='5' />
            </Flex>
            <ColorMode />
        </Flex>
    )
}

export default Header