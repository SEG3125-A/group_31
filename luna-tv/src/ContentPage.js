import React from 'react';
import './styles/Login.css';
import playButton from './images/play-button.svg';
import videoPlayer from './images/watching.png';
import ContentInfo from './ContentInfo';
import EpisodeBox from './EpisodeBox';
import './styles/ContentPage.css';
import mostPopularDataEN from './translations/mostPopularDataEN.json';
import mostPopularDataFR from './translations/mostPopularDataFR.json';
import Card from './Card'; 
import { useTranslation } from 'react-i18next';

const contentImage = require.context('./Content', true);

const ContentPage = () => {
    const { t, i18n } = useTranslation();
    const mostPopularData = i18n.language === 'en' ? mostPopularDataEN : mostPopularDataFR;
  return (
    <div>
        <div  className="play-button" id="play-button">
            <a href="#player" >
                <img  className="play-button-img"src={playButton} alt="Play Button" />
            </a>
        </div>
        <ContentInfo />
        <div className="content">
            <nav aria-label="breadcrumb mb-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">{t('contentPage.home')}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{t('contentPage.watching')}: Jujutsu Kaisen EP 1</li>
                </ol>
            </nav>
            <h1 className="fs-2 mb-5 mt-3 text-white">EP 1: Ryomen Sukuna</h1>
            <div className="content-player">
                <img id="player" className="video-player"src={videoPlayer} alt="Player" />
            </div>
        </div>
        <EpisodeBox />
        <div className="content">
            <h1 className="fs-2 mb-5 text-white">{t('contentPage.recommended')}</h1>
            <div className="row gx-4">
            {mostPopularData.map((card, index) => (
                <Card key={index} {...card} imgSrc={contentImage(card.imgSrc)} />
            ))}
            </div>
        </div>

        <div class="row full-catalog">
            <div class="col text-center mb-5">
                <a href="#" class="btn btn-primary btn-lg full-ctg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-collection-fill" viewBox="0 0 16 16">
                    <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"/>
                </svg>
                <span className="icon-text">{t('other.fullCatalogue')}</span>
                </a>
                <br />
                <a href="#play-button" class="text-light mt-2">Back to top</a>
            </div>
        </div>
    </div>
  );
};

export default ContentPage;
