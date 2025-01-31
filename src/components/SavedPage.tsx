// src/components/SavedPage.tsx
import { Box, Card, CardContent, Typography } from '@mui/material';
import { IJoke } from '../hooks/useJokes';

interface SavedPageProps {
  savedJokes: IJoke[];
}

const SavedPage = ({ savedJokes }: SavedPageProps) => {
  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      {savedJokes.length === 0 ? (
        <Typography>No saved jokes yet</Typography>
      ) : (
        savedJokes.map(joke => (
          <Card key={joke.id} sx={{ minWidth: 275, maxWidth: 500, width: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {joke.setup}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {joke.punchline}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default SavedPage;