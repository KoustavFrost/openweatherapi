import React from 'react';

import {
    Grid,
    GridItem,
    Text
} from '@chakra-ui/react';

const TemperatureComponent = ({ temperature }) => {
    return (
        <>
            <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                mt={8}
                mb={8}
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <Text fontSize="4xl">Temperature</Text>
                    <Text fontSize="3xl">{temperature.data.main.temp}</Text>
                </GridItem>
                {/* <GridItem colSpan={2} bg="papayawhip">
                    <Grid>
                    <Text fontSize="xl">Feels Like</Text>
                    <Text fontSize="md">{temperature.data.main.feels_like}</Text>

                    <Text fontSize="xl">Min Temperature</Text>
                    <Text fontSize="md">{temperature.data.main.temp_min}</Text>

                    <Text fontSize="xl">Max Temperature</Text>
                    <Text fontSize="md">{temperature.data.main.temp_max}</Text>
                    </Grid>
                    
                </GridItem> */}
                <GridItem colSpan={4} bg="papayawhip"></GridItem>
                <GridItem colSpan={4} bg="tomato"></GridItem>
            </Grid>
        </>
    );
};

export default TemperatureComponent;