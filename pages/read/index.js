import React,{useEffect,useState,useRef} from 'react'
import Head from 'next/head'
import {HomeMenu} from '../../components/Menu'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Ads300 from '../../components/Ads/Ads300'
import Logo from '../../components/Logo'

const Slide = () =>{
  return(
    <div
        className={styles.slide} 
        >
            <Link href={"#"}>
                <a>
                    <div className={styles.slider}>
                        <Image
                            src={"https://picsum.photos/500/400"}
                            width="400"
                            height="200"
                            layout="responsive"
                            className={styles.img}
                        />
                        <div className={styles.mark_down}>
                            <h5 className={styles.cat}>Catérorie</h5>
                            <span className={styles.desc}>No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.</span>
                        </div>

                        <div className={styles.publisher}>
                          <Image
                              src={"https://picsum.photos/500/400"}
                              width="40"
                              height="40"
                              layout="fixed"
                              className={styles.publisher_logo}
                          />
                          <div className={styles.name}>Published by <strong>Prince Nick Ballo</strong> on Sep,14,2022</div>
                        </div>
                    </div>
                </a>
            </Link>

    </div>
                   
  )
}

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

const useAmpStoryPlayer = (callback,dep) => {
  useEffect(() => {
    console.log("useAmpStoryPlayer");
    const ampScript = document.querySelector(
      `script[src="${ampStoryPlayerUrl + ".js"}"]`
    );
    if (!ampScript) {
      document.head.appendChild(getAmpScript(callback));
      document.head.appendChild(getAmpCss());
    }
  }, [dep]);
};


const loadPlayer = (playerRef) => () => {
  if (window.AmpStoryPlayer) {
    new window.AmpStoryPlayer(window, playerRef.current).load();
  }
  
  playerRef.current.add([
    {
      href:
        "https://stories.marmiton.org/menu-de-la-semaine-4-10-janvier-dE3b4YkgP/"
    }
  ]);
};

function ReadIndex() {

  const [mounted,setMounted] = useState(false)
  const player = null
  const playerRef = useRef(null);

  useEffect(()=>{
    setMounted(true)
  },['init'])

  useAmpStoryPlayer(loadPlayer(playerRef),mounted)

  useEffect(()=>{
    const player1 = document.getElementById("player1");
    const player = document.getElementById("player2");
    const lightboxEl = document.querySelector(".lightbox");

    async function initializeWidget(idx) {
      var stories = player.getStories();
      console.log(stories)
      player.show(stories[idx].href, null, {animate: true});
      player.play();
      //lightboxEl.classList.toggle("show");
    }
    if (player){
      if (player.isReady) {
        initializeWidget(1);
      } else {
        player.addEventListener("ready", () => {
          initializeWidget(0);
        });
      }
     
      player.addEventListener("amp-story-player-close", () => {
        player.pause();
        lightboxEl.classList.toggle("show");
      });
    }
  }, [mounted, playerRef])

  
  return (
    <>

      <div>
        {/* <HomeMenu /> */}
        <main className={styles.main}>
          <div className={styles.head}>
            <Logo style={{fontSize:"2rem"}}/>
            {/* <h3>Main articles</h3> */}
          </div>
          <br></br>
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
                  <amp-story-player layout="fill" width="360" height="600" amp-cache="cdn.ampproject.org" id="player1">
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
          <div className="viewport">
            <div className="entry-point-container">
              <h1> Web Stories </h1>
              <div className="circular-entry-point">
                <div className="entry-points">
                  <div className="entry-point-card-container">
                  <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#FF6F32" }} 
                    onClick={(e)=>{
                      const lightboxEl = document.querySelector(".lightbox");
                      lightboxEl.classList.toggle("show");
                    }}/>
                    <div>
                      <span className="entry-point-card-title">Q&A with ZOE Newman</span>
                    </div>
                  </div>
                  <div className="entry-point-card-container">
                    <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#E6AD1C" }} />
                    <div>
                      <span className="entry-point-card-title">24 Hours in New York City</span>
                    </div>
                  </div>
                  <div className="entry-point-card-container">
                    <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#466FFF" }}/>
                    <div>
                      <span className="entry-point-card-title">The Next King of the Sea</span>
                    </div>
                  </div>
                  <div className="entry-point-card-container">
                    <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#4CA47C" }} />
                    <div>
                      <span className="entry-point-card-title">Spark a Passion for Reading</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>

            <div className="lightbox">
              <amp-story-player className="my-player" id="player2"  amp-cache="cdn.ampproject.org">
                <script type="application/json">
                  {`{
                    "behavior": {
                      "autoplay": false,
                      "pageScroll": false
                    },
                      "controls": [{
                      "name": "close",
                      "position": "start"
                    }]
                  }`}
                </script>

                <a href="https://wsdemos.uc.r.appspot.com/ampfest/s1"></a>
                <a href="https://wsdemos.uc.r.appspot.com/ampfest/s2"></a>
                <a href="https://wsdemos.uc.r.appspot.com/ampfest/s3"></a>
                <a href="https://wsdemos.uc.r.appspot.com/ampfest/s4"></a>
              </amp-story-player>
            </div>
          </div>
          <div>
            <section></section>
            <aside></aside>
          </div>
        </main>
      </div>
    </>
  )
}
// export default dynamic(() => Promise.resolve(ReadIndex), {
//   ssr: false,
// });

export default ReadIndex