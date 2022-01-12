import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Designs.css"

const Design = () => {
    return (
        <div className='mainblock'>
            <div id='usrdata' >
                <div id="profile_img">

                </div>
                <p className="nams"><b>Shaheryar Akbar</b></p>
                <p className="txts">Pakistan</p>
                <div className="icon">
                <span className="iconify icn" data-icon="akar-icons:github-outline-fill" data-width="15" data-height="15"></span>
                <span className="iconify icn" data-icon="iconoir:twitter" data-width="15" data-height="15"></span>
                <span className="iconify icn" data-icon="uit:blogger-alt" data-width="15" data-height="15"></span>
                </div>
                <div className="decsrp">
                    <span>Description dummy Description dummyDescription dummyDescript</span>
                </div>
                
            </div>
            <div id='reposdata' >
                <div>
                    <span className="repo_title">Repositories</span>
                    <input className='srch'
                        type="text" 
                        placeholder='Enter User Name'
                    />
                    <button className='srchbtn'>Search</button>
                    <hr id="hr_line" />
                </div>
                <div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
