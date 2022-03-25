import React from 'react';
// import { filmsPopular } from './films';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import Login from "./page/loginScreen/login"
import ShowList from "./page/showsListScreen/showList"
import HomeSreen from './page/homeScreen/home';
import ProfileScreen from './page/profileScreen/profile';
import SearchScreen from './page/searchScreen/search';
import SeriesList from './page/seriesListScreen/seriesList';


const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>

            <Router>
                <Routes>
                    <Route path="/" element={<HomeSreen/>} />
                    <Route path="login" element={<Login />} />
                    <Route path="showsList" element={<ShowList />} />
                    <Route path="seriesList" element={<SeriesList />} />
                    <Route path="profiles" element={<ProfileScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                </Routes>
            </Router>
            </ThemeProvider>

        </>)

}


export default App

