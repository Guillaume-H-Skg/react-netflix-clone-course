import React from 'react'
import { Box, Button, Container, Grid, TextField, Typography, } from '@mui/material'
import './banner.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom'

const StyleBanner = {
  position: 'relative',
  height: '800px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::after': {
    position: 'absolute',
    content: '""',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`,
  }
}

const Banner = () => {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`
          }
        }}
      >
        <Box sx={{ paddingTop: 25, }} className="banner__bg">
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1000 }}>
            <Typography
              variant="h2"
              component="h1"
              color="common.white"
              fontWeight="600"
              textAlign="center"
            >
              Unlimited movies, TV shows, and more.
            </Typography>
            <Typography
              variant="h5"
              component="p"
              color="common.white"
              textAlign="center"
              gutterBottom
            >
              Watch anywhere. Cancel anytime.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="common.white"
              textAlign="center"
              sx={{ my: 3 }}
            >
              Ready to watch? Enter your email to create or restart your membership.
            </Typography>
            <Grid container>
              <Grid item xs>
                <TextField
                  variant="filled"
                  label="Email address"
                  fullWidth
                  sx={{ bgcolor: 'common.white' }}
                />
              </Grid>
              <Grid item xs="auto">
              <Link to="login">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{ height: '100%', borderRadius: '2px' }}
                >
                 Get started <ChevronRightIcon />
                </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default Banner