import * as TemperatureAPI from '../api/Temperature';
import React, { useState } from 'react';

import {
    FormControl,
    FormLabel,
    Input,
    Container,
    Box,
    Button
} from '@chakra-ui/react';
import { FaCity } from 'react-icons/fa';

import TemperatureComponent from './TemperatureComponent';

const getLocalTemperatureUnit = () => {
    return localStorage.getItem('units') ?? 'metric';
};

const ShowTemperature = () => {
    // Hooks
    const [city, setCity] = useState();
    const [temperature, setTemperature] = useState({
        data: {
            main: {
                temp: '',
                feels_like: '',
                temp_min: '',
                temp_max: '',
                pressure: '',
                humidity: ''
            },
            weather: [
                {
                    main: '',
                    description: ''
                }
            ],
            visibility: '',
            wind: {
                'speed': '',
                'deg': ''
            }
        }
    });
    const [loader, setLoader] = useState(false);
    const [units] = useState(() => getLocalTemperatureUnit());
    const [showComponent, setShowComponent] = useState(false);

    const setCityName = (e) => {
        setCity(e.target.value);
    };

    const getTemperature = () => {
        setLoader(true);
        let payload = {
            q: city,
            appid: '4b6f2b08a884f7924adce43cbc3c6191',
            units: units
        };

        TemperatureAPI.getTemperatureApi(payload).then(res => {
            if (res.status === 200) {
                // Success
                let data = res.data;
                setTemperature({ ...temperature, data });
                setLoader(false);
                setShowComponent(true);
            }
        }).catch(err => {
            console.log(err.message);
            alert(err.message);
            setLoader(false);
        })

    }

    return (
        <div>
            <Container
                maxW="container.lg"
                mt={5}
            >
                <Box
                    maxW="container.lg"
                    p={4}
                    borderWidth="1px"
                    borderRadius="10px"
                >
                    <FormControl id="city">
                        <FormLabel>City</FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter city name"
                            value={city}
                            onChange={setCityName}
                        />
                        <Button isLoading={loader} onClick={getTemperature} leftIcon={<FaCity />} mt={3} colorScheme="teal">Go!</Button>
                    </FormControl>
                </Box>

                {
                    showComponent && (<TemperatureComponent temperature={temperature} />)
                }

            </Container>
        </div>
    );
};

export default ShowTemperature;