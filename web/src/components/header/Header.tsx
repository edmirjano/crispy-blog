import './Header.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="crispy-bg">
        <Link to="/" className="no-decoration">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FastfoodIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crispy blog
          </Typography>
          <Link to="/" className="no-decoration">
            <Button color="inherit">
              <AutoAwesomeMotionIcon />
              All Posts
            </Button>
          </Link>
          <Link to="/add-post" className="no-decoration">
            <Button color="inherit">
              <AddToPhotosIcon />
              Add post
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default Header;