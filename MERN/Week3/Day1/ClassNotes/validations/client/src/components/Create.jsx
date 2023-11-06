import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [releaseYear, setReleaseYear] = useState(1900);
    const [seen, setSeen] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("cool");
        const tempObjectToSendToDB = {
            title,
            image,
            releaseYear,
            seen
        };

        axios.post("http://localhost:8000/api/movies", tempObjectToSendToDB)
            .then(res => {
                console.log("✅✅✅✅✅", res.data);
                navigate("/");
            })
            .catch(err => console.log("❌❌❌❌", err));
    };

    return (
        <div>
            <div>
                {JSON.stringify(title)} <br />
                {JSON.stringify(image)} <br />
                {JSON.stringify(releaseYear)} <br />
                {JSON.stringify(seen)} <br />
            </div>
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

export default Create;