import { Box, Button, Container, Divider, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NavbarLogged from '../../component/navbar/navbarLogged';
import TopShow from '../showsListScreen/topShow/topShow';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import ModalInfo from '../../component/row/modal';
import "../../component/row/row.css";

const StyleDivider = {
    bgcolor: '#222222',
    height: '8px',
}

const SearchScreen = () => {
    const [type, setType] = useState(0);
    // const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
                }&language=fr-FR&query=${searchText}&page=1&include_adult=false`
            );
            setContent(data.results);
            //   setNumOfPages(data.total_pages);
            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type,]);

    return (
        <>
            <NavbarLogged />
            <TopShow/>
            <Divider sx={StyleDivider} />
            <Box sx={{ height: '100px' }}></Box>
            <Box sx={{ height: '4000px' }}>
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1000 }}>
                    <Grid container>
                        <Grid item xs>
                            <TextField
                                variant="filled"
                                label="Search any kind of show"
                                fullWidth
                                sx={{ bgcolor: 'common.white' }}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                sx={{ height: '100%', borderRadius: '2px' }}
                                onClick={fetchSearch}
                            >
                                Search <SearchIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg">
                    <Box sx={{ margin: '15px 0'}}>
                        <Tabs value={type} indicatorColor='primary' textColor='secondary'
                            onChange={(event, newValue) => {
                                setType(newValue);
                                // setPage(1);
                            }}>
                            <Tab style={{ color: "white",}} label="Movies" />
                            <Tab style={{ color: "white",}} label="TV Series" />
                        </Tabs>
                        <div className="row_posters">
                            {content &&
                                content.map((movie: any, index) => (
                                    <ModalInfo
                                        key={index}
                                        isShown={true}
                                        movieInfo={movie}
                                    />
                                ))}
                            {searchText && content ? <h2> </h2> : <h2>No data found</h2>}
                        </div>
                        <p>{content.length} result out of 20</p>
                    </Box>
                </Container>

                {/* <Box sx={{ display: 'flex', margin: '15px 0' }} style={{ backgroundColor: 'white' }}>
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        label="Search"
                        variant="filled"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button onClick={fetchSearch}><SearchIcon /></Button>
                </Box> */}
            </Box>
        </>
    )
}

export default SearchScreen