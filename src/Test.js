import React,{useState} from 'react';

const Test = () => {
    
    const [count,setCount]=useState(0)
    
    const Compte=()=>{
        setCount((count)=>count+1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Compte}>Incrementer</button>
        </div>
    );

};

export default Test;