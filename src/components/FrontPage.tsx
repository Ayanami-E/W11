// src/pages/FrontPage.tsx
import { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const FrontPage = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    setJoke(null);
    
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke', {
        signal
      });
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error fetching joke:', error);
        }
      }
    } finally {
      setIsLoading(false);
    }

    return () => {
      controller.abort();
    };
  };

  useEffect(() => {
    const cleanup = fetchJoke();
    return () => cleanup();
  }, []);

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Button 
        variant="contained" 
        onClick={fetchJoke}
        disabled={isLoading}
      >
        Get New Joke
      </Button>

      {isLoading && (
        <Typography>Loading a joke...</Typography>
      )}

      {joke && (
        <Card key={joke.id} sx={{ minWidth: 275, maxWidth: 500 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {joke.setup}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {joke.punchline}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default FrontPage;