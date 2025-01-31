import { Container, Typography } from '@mui/material';

const Home = () => {   
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Joke Generator
      </Typography>
    </Container>
  );
};

export default Home;  