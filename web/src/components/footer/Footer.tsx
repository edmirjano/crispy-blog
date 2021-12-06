import './Footer.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
export const Footer = () => {
  return (
     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <Box > 
      <div className="center-footer-text">
        <h5>Crispy Bacon srl © 2021 ALL RIGHTS RESERVED</h5>
      </div>
      </Box>
    </Paper>
  )
};
