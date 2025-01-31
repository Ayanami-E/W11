import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          component={Link}
          to="/"
          color="inherit"
          sx={{ mr: 2 }}
        >
          home
        </Button>
        <Button
          component={Link}
          to="/saved"
          color="inherit"
        >
          saved
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;