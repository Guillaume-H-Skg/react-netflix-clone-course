import axios from "../../requests/Axios";
import React, { useEffect, useState } from "react";
import "./row.css";
import ModalInfo from "./modal";


interface RowProps {
    title: string;
    fetchUrl: string;
    isShown: boolean;
}

function Row({ title, fetchUrl }: RowProps) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();

    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map((movie, index) => (
                    <div>
                        <ModalInfo key={index} isShown={true} movieInfo={movie}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Row;