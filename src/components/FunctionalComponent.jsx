import React, {useState, useEffect} from 'react';  // hooks
import Button from '@material-ui/core/Button';

const FunctionalComponent = () => {
    const[state, setState] = useState({
        test: 'test F'
    });

    useEffect(()=>{
        console.log("Functional useEffect -> Component did Mount");
    }, []);

    useEffect(()=>{
        console.log("Functional useEffect -> Component did Update");
    });

    useEffect(()=>{
        console.log(JSON.stringify(state));
    }, [state]);

    const clickHandler = () => { 
        setState({test: 'test3' });
    };

    return(
        <>
            <h1>Functional Component</h1>
            <h2>Functional Component Text</h2>
            <h2>{JSON.stringify(state)}</h2>
            <button onClick={clickHandler}>Click Me FunctionalComponent</button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
        </>
    );
};

export default FunctionalComponent;