import { useRef, useState } from 'react';
import useRandomJoke from './useRandomJoke';

function Hook() {

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const joke = useRandomJoke(fname, lname);

    const generateJoke = (e) => {
        e.preventDefault()
        setFname(firstNameRef.current.value)
        setLname(lastNameRef.current.value)
    }

    return (
        <div className="app" style={{ textAlign: "center" }}>
            <h2>{joke}</h2>

            <form action="">
                <input placeholder="First name" ref={firstNameRef} />
                <input placeholder="Last name" ref={lastNameRef} />
                <button onClick={generateJoke}>Generate Joke</button>
            </form>
        </div>
    );
}

export default Hook;
