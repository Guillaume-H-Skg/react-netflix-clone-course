import { AppBar, Grid, Select, Toolbar, MenuItem, Button, } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Style = {
  backgroundColor: 'transparent',
  padding: '25px 20px',
  position: 'absolute'
}

const StyleSelect = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'common.white',
  color: 'common.white',
  '& .MuiSelect-icon': {
    color: 'common.white'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}

const Nav = () => {
  return (
    <>
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
            <Grid item xs="auto">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue="EN"
                sx={StyleSelect}
              >
                <MenuItem value="EN">English</MenuItem>
                <MenuItem value="FR">France</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Link to="login">
                <Button color="primary" variant="contained">
                  Sign in
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>


    </>
  )
}

export default Nav