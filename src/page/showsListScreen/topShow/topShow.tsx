import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

import Info from '@mui/icons-material/Info';
import axios from "../../../requests/Axios";
import Requests from '../../../requests/resquests';

const TopShow = () => {

    const [movie, setMovie] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(Requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    return (
        <>
            <Box sx={{
                position: 'relative',
                height: '80vh',
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
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
                }
            }}>
                {/* <img src="../img/login-bg.jpg" alt='img' />
                    qdqd */}

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="space-between"
                    ml={2}
                    mt={40}
                    zIndex={1000}
                >
                    <Grid item xs={12}>
                        <Typography mb={2} ml={5} style={{ textShadow: 'rgb(0 0 0 / 90%) 0px 0px 13px', fontWeight: 'bold' }} variant="h1" component="h1">
                            {movie?.title || movie?.original_title || movie?.name || movie?.original_name}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Stack direction="row" ml={5} spacing={2}>
                            <Button size="large" variant="contained" startIcon={<PlayArrowIcon />} color="secondary">
                                Play
                            </Button>
                            <Button size="large" sx={{ bgcolor: "#525352" }} variant="contained" startIcon={<Info />} >
                                More information
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item >
                        <Stack direction="row" spacing={2}>
                            {/* <Box mt={1} style={{ border: '2px solid white', borderRadius: '50%', padding: '4px' }}> */}
                            <Avatar sx={{ bgcolor: "transparent", border: "1px solid white", padding: "2px" }}>
                                <VolumeUpOutlinedIcon fontSize="large" />
                            </Avatar>
                            <Box sx={{ bgcolor: '#21201f', borderLeft: '6px solid #626261', minWidth: '100px' }}>
                                <Typography ml={2} mt={1}>
                                    {movie?.vote_count}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default TopShow