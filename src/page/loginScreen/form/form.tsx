import { Box, Button, Checkbox, Container, FormControl, FormHelperText, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import './form.css'
import { Link } from 'react-router-dom'

const Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    background: 'rgba(0, 0, 0, 0.4)',
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    )`,
    boxShadow: 24,
    p: 7,
}

const StyleContainer = {
    position: 'relative',
    zIndex: 1000,
    padding: 15,
    paddingTop: 20
}

export const Form = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <Container maxWidth="md" sx={StyleContainer}>
            <Box sx={Style}>
                <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 600 }}>
                    Sign in
                </Typography>
                <Grid sx={{ mb: 2 }}>
                    <form>
                        <FormControl sx={{ mb: 2, }} fullWidth>
                            <TextField
                                className='text__field'
                                id="email"
                                name="email"
                                label="Email or phone number"
                                variant="filled"
                                sx={{ backgroundColor: '#333333', input: { color: 'white' } }}
                                InputLabelProps={{
                                    style: { color: '#7a7a7a', },
                                }}
                            />
                            <FormHelperText sx={{ color: '#e87c03' }}>
                                Please enter a valid email or phone number.
                            </FormHelperText>
                        </FormControl>
                        <FormControl sx={{ mb: 4 }} fullWidth>
                            <TextField
                                className='text__field'
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                                variant="filled"
                                sx={{ backgroundColor: '#333333', input: { color: 'white' } }}
                                InputLabelProps={{
                                    style: { color: '#7a7a7a', },
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button sx={{ color: '#7a7a7a' }} variant="text" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormHelperText sx={{ color: '#e87c03', }}>
                                Your password must contain between 4 and 60 characters.
                            </FormHelperText>
                        </FormControl>
                        <Link to="../profiles">
                            <Button type="submit" variant="contained" size="large" fullWidth>
                                Sign in
                            </Button>
                        </Link>
                    </form>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 2, mt: 0 }}
                >
                    <Box>
                        <Checkbox sx={{ p: 0 }} />
                        <Typography color="#b3b3b3" variant="caption">
                            Remember me
                        </Typography>
                    </Box>
                    <Typography variant="caption" color="#b3b3b3" component="a" href="#">
                        Need help ?
                    </Typography>
                </Grid>
                <Grid container alignItems="center" sx={{ mb: 2 }}>
                    <img style={{
                        width: '20px',
                        height: '20px',
                    }}
                        src='../img/login-FB.png' alt='FB' />
                    <Typography variant="caption" color="#8c8c8c" component="a" href="#" sx={{ ml: 1 }}>
                        Login with Facebook
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="body1" color="#8c8c8c" component="span">
                        New to Netflix ?
                    </Typography>
                    <Typography variant="body1" color="white" component="a" href="#">
                        &nbsp;Sign up now.
                    </Typography>
                </Grid>
                <Grid>
                    <Typography color="#8c8c8c" variant="caption">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </Typography>
                    <Typography variant="caption" color="#0071eb" component="a" href="#">
                        &nbsp;Learn more.
                    </Typography>
                </Grid>
            </Box>
        </Container>
    )
}