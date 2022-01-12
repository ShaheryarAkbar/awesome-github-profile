import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const App = () => {

    const [inpt, setInpt] = useState("");
    const [reps, setReps] = useState([]);
    const [usr, setUsr] = useState("");
    

    const getData = async () => {

        const result = await fetch(`https://api.github.com/users/${inpt}`);
        const mainData = await result.json();
        console.log(mainData);
        setUsr(mainData);

        const res = await fetch(`https://api.github.com/users/${inpt}/repos`);
        const actualData = await res.json();
        console.log(actualData);
        setReps(actualData);

        setInpt("");
    }

    const setinpt = (e) => {
        setInpt(e.target.value);
    }

    return (
        <>
        <div className='main'>
            <h1>Hyee! {usr.login}</h1>
            <input 
                type="text" 
                placeholder='Enter User Name'
                onChange={setinpt}
                value={inpt}
            />
            <button onClick={getData}>Search</button>

            <h1>User Login : {usr.login}</h1>
            <h1>User Id : {usr.id}</h1>
    
            {/* {
                reps.slice(0, 5).map((items, index) => {
                return (
                    <ul key={index}>
                        <li>{items.name}</li>
                        <li>{items.description}</li>
                    </ul>
                    )
                })
            } */}
            <h2>Popular Repositories</h2>
            {
                reps.slice(0, 7).map((items, index) => {
                return (
                    <div className='App' key={index}>
                    <div className='left'>
                        <div className='card'>
                            <div className='nam'>
                                <div>
                                <div className='btn'>
                                    <button className='btns'>Public</button>
                                </div>
                                    <h4 className='nm'>{items.name}</h4>
                                    <p>{items.description}</p>
                                </div>
                                <div>
                                    <p className='tag'><i className="fas fa-code-branch text-primary"></i>  {items.forks_count}</p>
                                    <p className='tag'><i class="fas fa-circle"></i>  {items.language}</p>
                                    <p className='tag'><i class="far fa-star"></i>  {items.stargazers_count}</p>
                                </div>
                                
                            </div>
                                
                        </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </>
    );
};

export default App