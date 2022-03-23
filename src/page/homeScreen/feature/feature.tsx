import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const StyleDivider = {
    bgcolor: '#222222',
    height: '8px',
}

const StyleH1 = {
    textAlign: { xs: 'center', md: 'left' }
}

const StyleHome = {
    position: 'absolute',
    top: '48%',
    left: '50%',
    width: '100%',
    height: '100%',
    maxWidth: '72%',
    maxHeight: '54%',
    transform: 'translate(-50%, -50%)'
}

const StyleMac = {
    position: 'absolute',
    top: '33%',
    left: '50%',
    width: '100%',
    height: '100%',
    maxWidth: '65%',
    maxHeight: '49%',
    transform: 'translate(-50%, -50%)'
}

const Feature = () => {

    return (
        <Box>
            <Divider sx={StyleDivider} />
            <Box>
                <Container maxWidth="lg" sx={{ py: 6 }}>
                    <Grid container alignItems="center" columnSpacing={12}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={StyleH1}
                            >
                                Enjoy on your TV.
                            </Typography>

                            <Typography
                                variant="h5"
                                component="h3"
                                sx={StyleH1}
                            >
                                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <img style={{
                                        width: '100%',
                                        height: '100%',
                                    }} src='../img/home-tv.png' alt='TV' />
                                </Box>
                                <Box
                                    sx={StyleHome}
                                >
                                    <video
                                        src='../video/video-tv.m4v'
                                        style={{ height: '100%', width: '100%' }}
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                    >
                                    </video>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider sx={StyleDivider} />
            <Box>
                <Container maxWidth="lg" sx={{ py: 6 }}>
                    <Grid container alignItems="center" columnSpacing={12}>
                        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                            <Box sx={{ position: 'relative' }}>
                                <Box>
                                    <img style={{
                                        width: '100%',
                                        height: '100%',
                                    }} src="../img/home-mobile.jpg" alt='mobile' />
                                </Box>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bgcolor: 'black',
                                        zIndex: 1,
                                        border: `2px solid grey`,
                                        borderRadius: 2,
                                        p: 1,
                                        width: {
                                            xs: '80%',
                                            sm: '70%',
                                            md: '60%'
                                        },
                                        bottom: {
                                            xs: '5%',
                                            md: '10%'
                                        },
                                        left: '50%',
                                        transform: 'translate(-50%, 0)'
                                    }}
                                >
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={2} md={3}>
                                            <img style={{
                                                width: '100%',
                                                height: '100%',
                                            }} src='../img/home-boxshot.png' alt='downloadImage' />
                                        </Grid>
                                        <Grid item xs={8} md={6}>
                                            <Typography>Stranger Things</Typography>
                                            <Typography variant="body1" color={blue}>
                                                Downloading...
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} md={3}>
                                            <img style={{
                                                width: '100%',
                                                height: '100%',
                                            }} src='../gif/download-icon.gif' alt='downloadAnim' />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={StyleH1}
                            >
                                Download your shows to watch offline.
                            </Typography>

                            <Typography
                                variant="h5"
                                component="h3"
                                sx={StyleH1}
                            >
                                Save your favorites easily and always have something to watch.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider sx={StyleDivider} />
            <Box>
                <Container maxWidth="lg" sx={{ py: 6 }}>
                    <Grid container alignItems="center" columnSpacing={12}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={StyleH1}
                            >
                                Watch everywhere.
                            </Typography>

                            <Typography
                                variant="h5"
                                component="h3"
                                sx={StyleH1}
                            >
                                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <img style={{
                                        width: '100%',
                                        height: '100%',
                                    }} src='../img/home-mac.png' alt='mac' />
                                </Box>
                                <Box
                                    sx={StyleMac}
                                >
                                    <video
                                        src="../video/video-mac.m4v"
                                        style={{ height: '100%', width: '100%' }}
                                        autoPlay
                                        playsInline
                                        muted
                                        loop
                                    >
                                    </video>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider sx={StyleDivider} />
            <Box>
                <Container maxWidth="lg" sx={{ py: 6 }}>
                    <Grid container alignItems="center" columnSpacing={12}>
                        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                            <Box>
                                <img style={{
                                    width: '100%',
                                    height: '100%',
                                }} src='../img/home-kid.png' alt='mac' />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={StyleH1}
                            >
                                Create profiles for kids.
                            </Typography>

                            <Typography
                                variant="h5"
                                component="h3"
                                sx={StyleH1}
                            >
                                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider sx={StyleDivider} />
        </Box>
    )
}
export default Feature