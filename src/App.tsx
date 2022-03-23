import React from 'react';
// import { filmsPopular } from './films';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import Login from "./page/loginScreen/login"
import ShowList from "./page/showsListScreen/showList"
import FilmList from "./page/filmList"
import HomeSreen from './page/homeScreen/home';
import ProfileScreen from './page/profileScreen/profile';
import SearchScreen from './page/searchScreen/search';


const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>

            <Router>
                <Routes>
                    <Route path="/" element={<HomeSreen/>} />
                    <Route path="login" element={<Login />} />
                    <Route path="showsList" element={<ShowList />} />
                    <Route path="filmList" element={<FilmList />} />
                    <Route path="profiles" element={<ProfileScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                </Routes>
                {/* <div className="list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="login">login</Link></li>
                        <li><Link to="showsList">ShowList</Link></li>
                        <li><Link to="filmList">filmList</Link></li>
                        <li><Link to="profiles">ProfileScreen</Link></li>
                        <li><Link to="search">ProfileScreen</Link></li>
                    </ul>
                </div> */}
            </Router>
            </ThemeProvider>

        </div>)

}


export default App

