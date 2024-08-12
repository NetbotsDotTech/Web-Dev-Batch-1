import React, { useState } from 'react';
import { Card, CardContent, TextField, IconButton, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const WeatherCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  marginTop: theme.spacing(5),
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
}));

const WeatherImage = styled('img')({
  width: '100px',
  height: '100px',
  margin: '20px auto',
});

const Weather = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState('');

  const handleSearch = async () => {
    // Call to a weather API (e.g., OpenWeatherMap) should be made here
    // For demo, let's assume the API returns the following:
    const mockApiResponse = {
      temperature: 22,
      humidity: 60,
      icon: 'https://openweathermap.org/img/wn/10d@2x.png',
    };

    setTemperature(mockApiResponse.temperature);
    setHumidity(mockApiResponse.humidity);
    setWeatherIcon(mockApiResponse.icon);
  };

  return (
    <WeatherCard>
      <Box display="flex" alignItems="center" justifyContent="center" marginBottom={2}>
        <TextField
          label="City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
      {weatherIcon && <WeatherImage src={weatherIcon} alt="Weather icon" />}
      {temperature !== null && (
        <Typography variant="h5">Temperature: {temperature}°C</Typography>
      )}
      {humidity !== null && (
        <Typography variant="h5">Humidity: {humidity}%</Typography>
      )}
    </WeatherCard>
  );
};

export default Weather;
