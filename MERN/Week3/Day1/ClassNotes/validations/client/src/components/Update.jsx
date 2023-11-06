import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Update = (props) => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [releaseYear, setReleaseYear] = useState(1900);
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/movies/" + id)
            .then(res => {
                console.log(res.data);
                // set all inputs from the db
                setTitle(res.data.title);
                setImage(res.data.image);
                setReleaseYear(res.data.releaseYear);
                setSeen(res.data.seen);
            })
            .catch(err => console.log(err));
    }, [id]);


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("cool");
        const tempObjectToSendToDB = {
            title,
            image,
            releaseYear,
            seen
        };

        axios.patch("http://localhost:8000/api/movies/" + id, tempObjectToSendToDB)
            .then(res => {
                console.log("✅✅✅✅✅", res.data);
                navigate("/");
            })
            .catch(err => console.log("❌❌❌❌", err));
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    title:
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    image:
                    <input value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                    release year:
                    <input type="number" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} />
                </div>
                <div>
                    have you seen this?:
                    <input type="checkbox" checked={seen} onChange={e => setSeen(e.target.checked)} />
                </div>

                <p></p>
                <button>submit</button>
            </form>
        </div>
    );
};

export default Update;