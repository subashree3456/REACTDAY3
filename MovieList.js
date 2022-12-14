import { useState } from "react";
import { Movie } from './Movie';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function MovieList({ movieList, setMovieList }) {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    // below lines is to reduce line number 144
    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
        };
        console.log(newMovie);
        { /* create a copy of movielist and add new movie  to it */ }

        // setmovielist is not available here so propss sa app componentlenthu varum
        setMovieList([...movieList, newMovie]);
    };
    return (
        <div>
            <div className="add-movie-container">
                {/* material ui coding starts */}
                {/* <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} value={name} /> */}
                {/* {name} */}
                {/* no need of id: outlined basic  */}
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)}  value={name}/>
                <TextField id="outlined-basic" label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)}  value={poster}/>
                <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)}  value={rating}/>
                <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)}  value={summary}/>
                {/* <p> {name} {poster} {rating} {summary}</p> */}
            {/* material ui coding starts */}
                <Button onClick={addMovie} variant="contained" > Add Movie</Button>
            </div>
            <div className="movie-list">
                {movieList.map((mv) => (
                    <Movie movie={mv} />))}
            </div>
        </div>
    );
}
