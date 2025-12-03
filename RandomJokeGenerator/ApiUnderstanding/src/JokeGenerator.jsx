
import { useState, useEffect} from 'react'

function JokeGenerator(){
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);

    const LoadJoke = async()=>{
        setLoading(true);
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data= await response.json();
        setJoke(data);
        setLoading(false);
    };


    useEffect (()=>{
        LoadJoke();
    }, []);

    return(
        <div className='mainContainer'>
            <div className='contentCard'>
            <h3 className='contentTitle'><u>Random Joke Loader</u></h3>

            { loading ? (
                <p className='loadingText'>Loading joke....</p>): (
                    <div>
                        <h3 className='jokeSetUp'>{joke.setup}</h3>
                        <p className='punchLine'><strong>{joke.punchline}</strong></p>
                    </div>
                )}
                </div>
            <button className='loadButton' onClick={LoadJoke}>Load Joke</button>
        </div>
    );
}

export default JokeGenerator