import { AddCircle } from '@mui/icons-material';
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material'

import React from 'react'
import Footer from '../../component/footer/footer';
import Logo from '../../component/logo/logo';
import { Link } from 'react-router-dom'


const ProfileScreen = () => {
    return (
        <Box>
            <Logo />
            <Box>
                <Container maxWidth="lg" sx={{ py: 6, mt: 12 }}>
                    {/* <Grid container alignItems="center" columnSpacing={12}> */}
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{ textAlign: { xs: 'center', } }}
                        >
                            Who's watching ?
                        </Typography>
                    </Grid>
                    <Grid sx={{ py: 6, mt: 2 }}
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Grid container justifyContent="center" item xs={3}>
                            <Stack>
                                <Link to="../showsList">
                                    <img style={{ maxHeight: '200px', border: '5px solid #1e1e1e' }} src='../img/profile-avatarA.png' alt='ProfilePicture' />
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#808080', }}
                                    >
                                        Tom
                                    </Typography>
                                </Link>

                            </Stack>
                        </Grid>
                        {/* <Grid container justifyContent="center" item xs={3}>
                            <Stack>
                                <img style={{ maxHeight: '200px', border: '5px solid #1e1e1e' }} src='../img/profile-avatarA.png' alt='ProfilePicture' />
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#808080', }}
                                >
                                    Tom
                                </Typography>

                            </Stack>
                        </Grid> */}
                        <Grid container justifyContent="center" item xs={3}>
                            <Stack>
                                <Box style={{ height: '199px', textAlign: 'center', paddingTop: '35%' }}>
                                    <IconButton sx={{ color: '#808080' }}>

                                        <AddCircle style={{ fontSize: 100 }} />

                                    </IconButton>
                                </Box>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#808080', }}
                                >
                                    Add Profile
                                </Typography>
                            </Stack>
                        </Grid>

                    </Grid>
                    <Grid container justifyContent="center">
                        <Button variant="outlined" sx={{ color: '#808080', border: 'solid 1px #808080', borderRadius: '0' }}>
                            Manage Profiles
                        </Button>
                    </Grid>
                    {/* </Grid> */}
                </Container>
            </Box>
            <Footer />
        </Box>

    )
}

export default ProfileScreen