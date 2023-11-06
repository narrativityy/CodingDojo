import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneMovie = (props) => {

    const { id } = useParams();
    const [thisMovie, setThisMovie] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/movies/" + id)
            .then(res => {
                console.log(res.data);
                setThisMovie(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            {JSON.stringify(thisMovie)}
            {
                thisMovie ? (
                    <>
                        <h2>{thisMovie.title}</h2>
                        <img src={thisMovie.image} width="300px" alt={thisMovie.title} />
                    </>
                ) : <h3>Loading...</h3>
            }
        </div>
    );
};

export default OneMovie;