import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const Apps = () => {

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
    }

    const setinpt = (e) => {
        setInpt(e.target.value);
    }

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          try {
              getData();
              setInpt('');
          }
          catch (e) {
              console.log(e);
          }
        }
      }

    return (
        <div className='mainbody'>
            <div id='usrdata'>
                <div id="profile_img">
                    <img src={usr.avatar_url}/>
                </div>
                <p className="nams"><b>{usr.login}</b></p>
                <p className="txts">{usr.location}</p>
                <div className="icon">
                    <a href={usr.html_url} target='_blank'><span className="iconify icn" data-icon="akar-icons:github-outline-fill" data-width="28" data-height="28"></span></a>
                    <a href={usr.twitter_username} target='_blank'><span className="iconify icn" data-icon="iconoir:twitter" data-width="28" data-height="28"></span></a>
                    <a href={usr.blog} target='_blank'><span className="iconify icn" data-icon="uit:blogger-alt" data-width="28" data-height="28"></span></a>
                </div>
                <div className="decsrp">
                    <span>{usr.bio}</span>
                </div>
                
            </div>
            <div id='reposdata' >
                <div>
                    <span className="repo_title">Repositories</span>
                    <input className='srch'
                        type="text" 
                        autoFocus='true'
                        placeholder='Enter User Name'
                        onChange={setinpt}
                        onKeyDown={_handleKeyDown}
                    />
                    <a className='srchbtn'><i className="fas fa-search"></i></a>
                    <hr id="hr_line" />
                </div>
                <div className='repodata'>
                {
                    reps.map((items, index) => {
                        return (
                            <div key={index}>
                                <div className='card'>
                                    <div className='nam'>
                                        <div>
                                            <a href={items.clone_url} target="_blank"><p className='nm'>{items.name}</p></a>
                                            <p className='decsrptin'>{items.description}</p>
                                        </div>
                                        <div>
                                            <p className='tag'><i className="fas fa-code-branch text-primary"></i>  {items.forks_count}</p>
                                            <p className='tag'><i class="fas fa-circle"></i>  {items.language}</p>
                                            <p className='tag'><i class="far fa-star"></i>  {items.stargazers_count}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default Apps
