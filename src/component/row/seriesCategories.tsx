import React from 'react'
import Requests from '../../requests/resquests'
import Row from './row'

const SeriesCategories = () => {
    return (
        <div className="row_container">
            <Row title="Top rated series" fetchUrl={Requests.fetchTopRatedSeries} isShown />
            <Row title="Most popular series" fetchUrl={Requests.fetchMostPopularSeries} isShown />
            <Row title="Romantic series" fetchUrl={Requests.fetchRomanticSeries} isShown />
            <Row title="Anime" fetchUrl={Requests.fetchAnimeSeries} isShown />
        </div>
    )
}

export default SeriesCategories