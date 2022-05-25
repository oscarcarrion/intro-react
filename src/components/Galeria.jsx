import { useState, useEffect } from "react"
import Pelicula from "./Pelicula"
import { Grid, Box, Text } from '@chakra-ui/react'
import Header from "./Header"

const Galeria = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [])

    const handleDeleteFilms = (film) => {
        const newData = data.filter(el => el.id !== film.id)
        setData(newData)
    }

    return(
        <Box paddingX='10' paddingBottom='5'>
            <Header text={'Studio Ghibli'}/>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {data.map(film =>
                    <Pelicula film={film} key={film.id} handleDeleteFilms={handleDeleteFilms} />
                )
                }
            </Grid>
            {data.length === 0 && 
                <Text fontSize='xl'>No Data Found</Text>
            }
        </Box>
    )
}

export default Galeria