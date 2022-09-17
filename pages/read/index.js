import React,{useEffect,useState,useRef} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Ads300 from '../../components/Ads/Ads300'
import Logo from '../../components/Logo'
import StoryPlayerWidget from '../../components/StoryPlayerWidget'
import Footer from '../../components/footer/footer'
import Pagination from '../../components/Pagination'
import Slide from '../../components/CardView'

const ampStoryPlayerUrl = "https://cdn.ampproject.org/amp-story-player-v0";

function getAmpScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src = ampStoryPlayerUrl + ".js";
  //ampJS.onload = callback;
  return ampJS;
}

function getAmpCss() {
  const ampCSS = document.createElement("link");
  ampCSS.href = ampStoryPlayerUrl + ".css";
  ampCSS.rel = "stylesheet";
  ampCSS.type = "text/css";

  return ampCSS;
}

const useAmpStoryPlayer = (callback) => {
  useEffect(() => {
    console.log("useAmpStoryPlayer");
    const ampScript = document.querySelector(
      `script[src="${ampStoryPlayerUrl + ".js"}"]`
    );
    if (!ampScript) {
      document.head.appendChild(getAmpScript(callback));
      document.head.appendChild(getAmpCss());
    }
  }, []);
};


const loadPlayer = (playerRef) => () => {
  if (window.AmpStoryPlayer) {
    console.log("window");
    new window.AmpStoryPlayer(window, playerRef.current).load();
  }

  playerRef.current.add([
    {
      href:
        "https://stories.marmiton.org/menu-de-la-semaine-4-10-janvier-dE3b4YkgP/"
    }
  ]);
  
};

function ReadIndex(props) {


  const playerRef = useRef(null);

  useAmpStoryPlayer(loadPlayer(playerRef))
 
  return (
    <>

      <div id="mainContent">
        {/* <HomeMenu /> */}
        <main className={styles.main} >
          <div className={styles.head}>
            <Logo style={{fontSize:"2rem"}}/>
            {/* <h3>Main articles</h3> */}
          </div>
          <StoryPlayerWidget/>
          <div className={styles.editorial}>
            <div className={styles.mainSlideShow}>
                <Slide/>
                <Slide/>

                <Slide/>
                <Slide/>

            </div>
            <div className={styles.right}>
              <div className={styles.mainPlayer}>
                {/* {mounted &&
                ( */}
                  <amp-story-player layout="fill" width="360" height="600" amp-cache="cdn.ampproject.org" id="player1" ref={playerRef}>
                    <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                      <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="360" height="600" loading="lazy" data-amp-story-player-poster-img/>
                        Stories in AMP - Hello World
                    </a>
                    <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                      <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="360" height="600" loading="lazy" data-amp-story-player-poster-img />
                      Stories in AMP - Hello World
                    </a>
                    <a href="https://preview.amp.dev/documentation/examples/introduction/stories_in_amp/">
                      <img src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg" width="360" height="600" loading="lazy" data-amp-story-player-poster-img />
                      Stories in AMP - Hello World
                    </a>
                  </amp-story-player>

                {/* )} */}
              </div>
              <Ads300/>
            </div>
          </div>
          <br></br>
          <br></br>
          <Pagination/>
          <br></br>
          <br></br>
          <Footer/>
        </main>
      </div>
    </>
  )
}
// export default dynamic(() => Promise.resolve(ReadIndex), {
//   ssr: false,
// });

export default ReadIndex