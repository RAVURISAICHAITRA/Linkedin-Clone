import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css"
function Sidebar() {

    const recentItem = (topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
                <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" />
                <Avatar className='sidebar__avatar'/>
                <h2>Ravuri Sai Chaitra</h2>
                <h4>ravurisaichaitra@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">254</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">25</p>
                </div>
            </div>
            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('programming')}
                {recentItem('software engineering')}
            </div>
        </div>
    )
}

export default Sidebar;
