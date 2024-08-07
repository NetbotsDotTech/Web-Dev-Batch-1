import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchCard = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = async () => {
    if (!word) return; // Do nothing if the word is empty

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data;

      // Extract the translation or meaning
      if (data && data[0] && data[0].meanings && data[0].meanings.length > 0) {
        const meanings = data[0].meanings;
        const definitions = meanings.flatMap(meaning => meaning.definitions.map(def => def.definition));
        setResult(definitions.join('; '));
      } else {
        setResult('Not found');
      }
    } catch (error) {
      setResult('Not found');
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
          <Typography variant="h6">{result}</Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SearchCard;
