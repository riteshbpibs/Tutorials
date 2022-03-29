import { useEffect, useState } from 'react'

const useRandomJoke = (fname, lname) => {
    const [joke, setJoke] = useState()

    useEffect(() => {
        const fetchJoke = async () => {
            await fetch(`http://api.icndb.com/jokes/random?firstName=${fname}&lastName=${lname}`)
                .then(res => res.json())
                .then(data => setJoke(data.value.joke))
        }

        fetchJoke()
    }, [fname, lname])

    return joke;
}

export default useRandomJoke
