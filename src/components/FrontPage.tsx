// src/components/FrontPage.tsx
import { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { IJoke } from '../hooks/useJokes';

interface FrontPageProps {
  saveJoke?: (joke: IJoke) => boolean;
}

const FrontPage = ({ saveJoke }: FrontPageProps) => {
  const [joke, setJoke] = useState<IJoke | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchJoke = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke', {
          signal: controller.signal
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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
    };

    fetchJoke();

    return () => {
      controller.abort();
    };
  }, []);

  const handleGetJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Button 
        variant="contained" 
        onClick={handleGetJoke}
        disabled={isLoading}
      >
        Get Joke
      </Button>

      {isLoading && (
        <Typography>Loading a joke...</Typography>
      )}

      {joke && !isLoading && (
        <Card key={joke.id} sx={{ minWidth: 275, maxWidth: 500, width: '100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {joke.setup}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {joke.punchline}
            </Typography>
            {saveJoke && (
              <Button 
                variant="contained" 
                onClick={() => saveJoke(joke)}
                sx={{ mt: 2 }}
              >
                Save joke
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default FrontPage;