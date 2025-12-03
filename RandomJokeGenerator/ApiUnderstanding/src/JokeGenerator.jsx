
import { useState, useEffect} from 'react'

function JokeGenerator(){
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);

    const LoadJoke = async()=>{
        setLoading(true);
        
    }


    useEffect (()=>{
        LoadJoke();
    }, []);

    return(
        <div>
            <h2>Practing API Fetching.</h2>
            <h3>Random Joke Loader</h3>

            { loading ? (
                <p>Loading joke....</p>): (
                    <div>
                        <h3>{joke.setup}</h3>
                        <p><strong>{joke.punchline}</strong></p>
                    </div>
                )}

            <button onClick={LoadJoke}>Load Joke</button>
        </div>
    );
}

export default JokeGenerator