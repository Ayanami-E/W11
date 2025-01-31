// src/pages/home.tsx
import { Container, Typography } from '@mui/material';

const Home = () => {   // 组件名必须大写
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Joke Generator
      </Typography>
    </Container>
  );
};

export default Home;  // 导出大写的组件