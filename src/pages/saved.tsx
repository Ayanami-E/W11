// src/pages/saved.tsx
import { Container, Typography } from '@mui/material';

const Saved = () => {   // 组件名必须大写
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Saved Jokes
      </Typography>
    </Container>
  );
};

export default Saved;  // 导出大写的组件