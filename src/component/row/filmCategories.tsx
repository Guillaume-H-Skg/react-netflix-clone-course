import React from 'react'
import Row from './row';
import Requests from '../../requests/resquests';

const FilmCategories = () => {
    return (
        <div className="row_container">
            <Row title="Trending Now" fetchUrl={Requests.fetchTrending} isShown />
            <Row title="Netflix Originals" fetchUrl={Requests.fetchNetflixOriginals} isShown />
            <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} isShown />
            <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} isShown />
            <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} isShown />
        </div>
    )
}
export default FilmCategories