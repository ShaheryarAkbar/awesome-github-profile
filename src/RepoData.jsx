import React from 'react';
import "./App.css";

const RepoData = () => {
    return (
        <div className='App'>
            <h1>Hyee!</h1>
            <div className='card'>
                <div className='nam'>
                    <div>
                        <h3 className='nm'>name</h3>
                        <p>description</p>
                    </div>
                    <div>
                        <p className='tag'>tag1</p>
                        <p className='tag'>tag2</p>
                        <p className='tag'>tag3</p>
                    </div>
                </div>
                <div>
                    <div className='btn'>
                        <button className='btns'>Public</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepoData
