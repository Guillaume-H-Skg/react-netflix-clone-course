import { AppBar, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Style = {
  background: 'transparent',
  backgroundImage: `linear-gradient( to top, rgba(253, 35, 35, 0) 0, rgba(38, 38, 38, 0.74) 100% );`,
  padding: '25px 20px',
  position: 'absolute'
}

const Logo = () => {
  return (
    <AppBar
      sx={Style}
      elevation={0}
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs>
            <Link to="/">
            <img
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              height="45px"
              width="167px"
              alt="Netflix logo"
            />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Logo