import { GridItem, Image, Box, Text, Center, Button } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

const Pelicula = ({ film, handleDeleteFilms }) => {
    
    return(
        <GridItem w={'100%'} borderColor='pink' borderWidth='2px' borderRadius='lg'>
            <Box>
                <Text fontSize='2xl' paddingBottom='2'>{film.title}</Text>
                <Text fontSize='lg' fontWeight='bold' paddingBottom='2'>{film.original_title}</Text>
                <Center paddingBottom='3'>
                    <Image
                        borderRadius='full'
                        boxSize='200px'
                        objectFit='cover'
                        src={film.movie_banner}
                        alt={film.title}
                    />
                </Center>
                <Text fontSize='s' padding='5' textAlign='justify' >{film.description}</Text>
                <Button marginBottom='5' onClick={() => handleDeleteFilms(film)}>
                    <DeleteIcon />
                </Button>
            </Box>
        </GridItem>
    )
}

export default Pelicula