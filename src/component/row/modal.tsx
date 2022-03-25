import React, { useState } from 'react'
import { Avatar, Box, Button, Fade, Grid, Modal, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

interface PosterInfo {
    movieInfo: MovieData,
    isShown: boolean
}

interface MovieData {
    id: number
    name: string
    title: string
    original_title: string
    original_name: string
    poster_path: string
    backdrop_path: string
    overview?: string
    first_air_date: Date
    vote_average: number
    vote_count: number
    popularity: number
    original_language: string

}


const Style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: '#181818',
    boxShadow: 24,
    p: 0,
    outline: 'none'
}

const StyleButton = {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: 'rgb(133, 133, 133)'
    }
}

const StyleGrid = {
    position: 'relative',
    height: '45vh',
    width: '59.3vw',
    background: 'linear-gradient( to bottom, rgba(253, 35, 35, 0) 0, rgba(38, 38, 38, 0.74) 100% )'
}

const WhiteText = {
    textShadow: 'rgb(0 0 0 / 90%) 0px 0px 13px', color: 'white'
}

const GreyText = {
    textShadow: 'rgb(0 0 0 / 90%) 0px 0px 13px', color: '#6d6f72'
}

const AvatarS = {
    bgcolor: "transparent", border: "1px solid #8d8d8d", 
}

const ModalInfo = ({ movieInfo }: PosterInfo) => {

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <img onClick={handleOpen}
                className="row_poster"
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt={movieInfo.name} 
            />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
                style={{ overflowY: 'scroll' }}
            >
                <Fade in={open}>
                    <Box sx={Style}>
                        <Box sx={{
                            position: 'relative',
                            height: '45vh',
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
                                backgroundSize: 'cover',
                                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path}")`
                            }
                        }}>
                            <Box>
                                <Grid
                                    container
                                    p={4}
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="space-between"
                                    zIndex={1000}
                                    sx={StyleGrid}
                                >
                                    <Grid item xs={12}>
                                        <Typography mb={2} style={{ textShadow: 'rgb(0 0 0 / 90%) 0px 0px 13px', fontWeight: 'bold', paddingTop: '22%' }} variant="h4" component="h1">
                                            {movieInfo?.title || movieInfo?.original_title || movieInfo?.name || movieInfo?.original_name}
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Stack direction="row" spacing={2}>
                                            <Button size="large"
                                                startIcon={<PlayArrowIcon />}
                                                variant="contained"
                                                sx={StyleButton}>play</Button>
                                            <Avatar sx={AvatarS}>
                                                <AddIcon />
                                            </Avatar>
                                            <Avatar sx={AvatarS}>
                                                <ThumbUpOutlinedIcon />
                                            </Avatar>
                                            <Avatar sx={AvatarS}>
                                                <ThumbDownAltOutlinedIcon />
                                            </Avatar>
                                        </Stack>
                                    </Grid>
                                    <Grid item mr={2} >
                                        <Stack direction="row" spacing={2}>
                                            <Avatar sx={AvatarS} >
                                                <VolumeUpOutlinedIcon sx={{ color: "#8d8d8d" }} />
                                            </Avatar>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Grid container>
                            <Grid item xs={6}>
                                <Stack direction="row" spacing={1} my={2} ml={3}>
                                    <Typography style={WhiteText}>
                                        Popularity :
                                    </Typography>
                                    <Typography style={GreyText}>
                                        {movieInfo?.popularity ? movieInfo?.popularity : "Unknown"}
                                    </Typography>
                                    <Typography style={WhiteText}>
                                        First online date :
                                    </Typography>
                                    <Typography style={GreyText}>
                                        {movieInfo?.first_air_date ? movieInfo?.first_air_date : "Unknown"}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack direction="row" spacing={2} my={2} ml={3}>
                                    <Stack direction="row">
                                        <Typography style={WhiteText}>
                                            Average rating :&nbsp;
                                        </Typography>
                                        <Typography style={GreyText}>
                                            {movieInfo?.vote_average ? movieInfo?.vote_average : "Unknown"}/10
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row">
                                        <Typography style={WhiteText}>
                                            Number of vote :&nbsp;
                                        </Typography>
                                        <Typography style={GreyText}>
                                            {movieInfo?.vote_count ? movieInfo?.vote_count : "Unknown"}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={1} my={2} ml={3}>
                                    <Typography style={WhiteText}>
                                        Original language :
                                    </Typography>
                                    <Typography style={GreyText}>
                                        {movieInfo?.original_language ? movieInfo?.original_language : "Unknown"}
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Typography id="transition-modal-description" sx={{ mt: 2, px: 2 }} variant="h4" component="h2">
                            {movieInfo?.title || movieInfo?.original_title || movieInfo?.name || movieInfo?.original_name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 1, p: 2 }}>
                            {movieInfo.overview}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )

}


export default ModalInfo