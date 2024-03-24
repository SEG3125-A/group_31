import React from 'react';
import './styles/EpisodeBox.css';
import { useTranslation } from 'react-i18next';

const EpisodeBox = () => {
  const { t } = useTranslation();
    return (
        <div className="rectangle">
          <div className="header m-2 p-0">
            <div className="dropdown">
              <button className="btn dropdown-toggle transparent-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
                  <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
                </svg>
                <span className="header-text">{t('contentPage.season')} 1</span>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
      <button className="btn btn-light m-2 ep-btn">EP 1: Ryomen Sukuna</button>
      <button className="btn btn-primary m-2 ep-btn">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2 ep-btn">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2 ep-btn">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2 ep-btn">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2 ep-btn">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2 ep-btn">EP 1: Lorem Ipsum Hoshea...</button>
      <button className="btn btn-primary m-2 ep-btn">EP 1: Lorem Ipsum Hoshea...</button>
    </div>
  );
};

export default EpisodeBox;
