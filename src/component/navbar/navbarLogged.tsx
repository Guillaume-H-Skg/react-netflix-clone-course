import React, { useState } from 'react'
import { AppBar, Grid, Toolbar, Box, IconButton, Badge, Typography, styled, InputBase, alpha, Stack } from '@mui/material'
import { AccountCircle, } from '@mui/icons-material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const NavbarLogged = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <AppBar
            sx={{
                background: colorChange ? 'black' : 'transparent',
                opacity: '1',
                transition: 'all 1s',
                height: '95px',
                backgroundImage: `linear-gradient( to top, rgba(253, 35, 35, 0) 0, rgba(38, 38, 38, 0.74) 100% );`,
                padding: '25px 20px',
                position: 'fixed'
            }}
            elevation={0}
        >
            <Toolbar>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs >
                        <Toolbar>
                            <Link to="/">
                                <img
                                    src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                                    height="45px"
                                    width="167px"
                                    alt="Netflix logo"
                                />
                            </Link>
                            <Box ml={10} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Stack spacing={3} direction='row'>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                    >
                                        MUIdqd
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                    >
                                        MUIdqd
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                    >
                                        MUIdqd
                                    </Typography>
                                </Stack>
                            </Box>
                        </Toolbar>
                    </Grid>

                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                        </IconButton> */}
                        <Box sx={{ flexGrow: 1 }} />
                        <Search>
                            <Link to="../search">
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Link>
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={1} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <Link to="../profiles">
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Link>
                        </Box>
                        {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton>
                            </IconButton>
                        </Box> */}
                    </Toolbar>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}

export default NavbarLogged