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

import axios from 'axios';

const App = () => {
  // Hooks
  const [city, setCity] = useState();
  const [temperature, setTemperature] = useState({});
  const [loader, setLoader] = useState(false);

  const setCityName = (e) => {
    setCity(e.target.value);
  };

  const getTemperature = () => {
    setLoader(true);
    axios.get('http://api.openweathermap.org/data/2.5/weather',{
      params: {
        q: city,
        appid: '4b6f2b08a884f7924adce43cbc3c6191'
      }
    })
    .then(res => {
      if (res.status === 200) {
        // Success
        let data = res.data;
        setTemperature({...temperature, data});
        setLoader(false);
      }
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
      </Container>
    </div>
  );
};

export default App;
