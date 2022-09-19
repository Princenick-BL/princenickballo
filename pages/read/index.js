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
import { getArticle ,getTopArticles} from '../../services/articles'

const ampStoryPlayerUrl = "https://cdn.ampproject.org/amp-story-player-v0";

function getAmpPlayerScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src ="https://cdn.ampproject.org/v0/amp-story-player-0.1.js";
  //ampJS.onload = callback;
  return ampJS;
}

function getAmpScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src ="https://cdn.ampproject.org/v0.js";
  //ampJS.onload = callback;
  return ampJS;
}

function getAmpCss() {
  const ampCSS = document.createElement("link");
  ampCSS.href = "https://cdn.ampproject.org/v0.css";
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
      document.head.appendChild(getAmpPlayerScript(callback));

      //document.head.appendChild(getAmpCss());
    }
  }, []);
};


const loadPlayer = (playerRef) => () => {
  const player = document.getElementById("player1");
  if (player) {
    player.load();
  }

  // playerRef.current.add([
  //   {
  //     href:
  //       "https://stories.marmiton.org/menu-de-la-semaine-4-10-janvier-dE3b4YkgP/"
  //   }
  // ]);
  
};

function ReadIndex({topA,page1}) {


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
          <StoryPlayerWidget topA={topA}/>
          <div className={styles.editorial}>
            <div className={styles.mainSlideShow}>
              {page1.map((article,index)=>{
                return(
                  <Slide key={index} article={article} style={{paddingBottom:".5rem"}}/>
                )
              })}
            </div>
            <div className={styles.right}>
              <div className={styles.mainPlayer}>
                {/* {mounted &&
                ( */}
                  <amp-story-player layout="responsive" width="360" height="600" amp-cache="cdn.ampproject.org" id="player1" ref={playerRef}>
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


export async function getServerSideProps(context) {
  // Fetch data from external API

  const page1 =  await getArticle({filter:{
    page : 1
  }})

  const topA =  await getTopArticles()

  //console.log(res.length)

  return { 
      props: {
        page1 : page1 || [],
        topA : topA || []
      } 
  }
}