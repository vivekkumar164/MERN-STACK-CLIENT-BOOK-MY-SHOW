import React, { useState } from 'react';
import { Table, Button } from 'antd'
import MovieForm from './MovieForm';

const MovieList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [formType, setFormType] = useState("add");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const tableHeadings = [
        {
            title: "Poster",
            dataIndex: ""
        },
        {
            title: "Movie Name",
            dataIndex: "name"
        },
        {
            title: "Description",
            dataIndex: "description"
        },
        {
            title: "Duration",
            dataIndex: "duration"
        },
        {
            title: "Genre",
            dataIndex: "genre"
        },
        {
            title: "Language",
            dataIndex: "language"
        },
        {
            title: "Release Date",
            dataIndex: "releaseDate"
        },
        {
            title: "Action",
            dataIndex: ""
        },
    ];
    return (
        <>
            <div className='d-flex justify-content-end'>
                <Button onClick={()=>{setIsModalOpen(true)}}>Add Movie</Button>
            </div>

            <Table columns={tableHeadings} />
            {isModalOpen && <MovieForm open={isModalOpen}/>}
        </>
    )
}

export default MovieList