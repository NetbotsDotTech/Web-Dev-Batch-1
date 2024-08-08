import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchCard = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState({ meaning: '', partOfSpeech: '', example: '' });

  const handleSearch = async () => {
    if (!word) return; // Do nothing if the word is empty

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data;

      // Extract the meaning, part of speech, and example sentence
      if (data && data[0] && data[0].meanings && data[0].meanings.length > 0) {
        const meaningData = data[0].meanings[0];
        const definition = meaningData.definitions[0];

        setResult({
          meaning: definition.definition || 'Meaning not found',
          partOfSpeech: meaningData.partOfSpeech || 'Part of speech not found',
          example: definition.example || 'Example not found',
        });
      } else {
        setResult({ meaning: 'Not found', partOfSpeech: 'Not found', example: 'Not found' });
      }
    } catch (error) {
      setResult({ meaning: 'Not found', partOfSpeech: 'Not found', example: 'Not found' });
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, mr: 2 }}>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              Cambridge Dictionary brings intermediate and advanced learners of English regularly updated words and meanings with Urdu translations, along with thousands of carefully chosen example sentences from the Cambridge English Corpus.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              InputProps={{
                endAdornment: (
                  <Button onClick={handleSearch}>
                    <SearchIcon />
                  </Button>
                ),
              }}
              fullWidth
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h6">Meaning: {result.meaning}</Typography>
            <Typography variant="h6">Part of Speech: {result.partOfSpeech}</Typography>
            <Typography variant="h6">Example: {result.example}</Typography>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SearchCard;
