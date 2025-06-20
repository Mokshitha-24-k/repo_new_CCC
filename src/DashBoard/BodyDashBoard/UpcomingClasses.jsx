import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Container,
} from '@mui/material';
import { styled } from '@mui/system';
import Studying from './Studying.jpg';
import Polymer from './Polymer.jpg';

const Item = styled(Box)(({ theme = {} }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing ? theme.spacing(2) : '16px',
  borderRadius: theme.shape?.borderRadius || '8px',
  boxShadow: theme.shadows?.[1] || '0px 1px 3px rgba(0,0,0,0.2)',
  width: '100%',
}));

const UpcomingClasses = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        
        <Grid item size={7}>
          <Item>
            <Typography variant="h6" color="black" sx={{ mb: 2 }}>
              Upcoming Classes
            </Typography>

            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box
                component="img"
                src={Studying}
                alt="Newton Class"
                sx={{ width: 50, height: 50, borderRadius: 1 }}
              />
              <Box sx={{ marginLeft: '10px' }}>
                <Typography variant="body1" fontWeight="bold" color="black">
                  Newtonian Mechanics - Class 5
                </Typography>
                <Typography variant="body2" color="text.primary">
                  By Rajesh Ahmed
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#d9e3f0',
                  color: 'black',
                  borderRadius: '5px',
                  textTransform: 'none',
                  width: '100px',
                  marginLeft: 'auto',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',
                  },
                }}
              >
                Join
              </Button>
            </Box>

            
            <Divider sx={{ my: 1 }} />

           
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2,}}>
              <Box
                component="img"
                src={Polymer}
                alt="Polymer Class"
                sx={{ width: 50, height: 50, borderRadius: 1 }}
              />
              <Box sx={{ marginLeft: '10px' }}>
                <Typography variant="body1" fontWeight="bold" color="black">
                  Polymer - Class 3
                </Typography>
                <Typography variant="body2" color="text.primary">
                  By Khalid Khan
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: '#d9e3f0',
                  color: 'black',
                  borderRadius: '5px',
                  textTransform: 'none',
                  width: '100px',
                  marginLeft: 'auto',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',
                  },
                }}
              >
                Join
              </Button>
            </Box>
          </Item>
        </Grid>

       
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              p: 2,
              backgroundColor: 'white',
              borderRadius: 2,
              height: '100%',
              minHeight: 200,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              5 Days Without a Break
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" sx={{ mb: 2 }}>
              The record is 16 days without a break
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              {['Sat', 'Sun', 'Mon', 'Tue', 'Wed','Thu','Fri'].map((day, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: 'center',
                    p: 1,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 1,
                    width: 40,
                  }}
                >
                  <Typography variant="caption">{day}</Typography>
                  <Typography variant="h6">🔥</Typography>
                </Box>
              ))}
            </Stack>
            <Typography variant="caption" color="text.secondary">
              ✔ 6 classes covered&nbsp;&nbsp;✔ 4 assignments completed
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UpcomingClasses;
