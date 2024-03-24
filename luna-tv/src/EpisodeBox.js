import React from 'react';
import './styles/EpisodeBox.css';

const EpisodeBox = () => {
  return (
    <div className="rectangle">
    <div className="header ms-4">
        <a href="#" className="header-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
                <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
            </svg>
            <span className="header-text">Season 1</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg> 
        </a>
      </div>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2">EP 1: Lorem Ipsum Hoshea...</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default EpisodeBox;
