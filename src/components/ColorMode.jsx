import { useColorMode, Button, Box } from "@chakra-ui/react"
import { SunIcon } from "@chakra-ui/icons"

const ColorMode = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <Box paddingTop='7'>
            <Button onClick={toggleColorMode}>
            <SunIcon />
            </Button>
        </Box>
    )
  }

export default ColorMode