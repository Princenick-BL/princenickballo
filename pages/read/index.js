import React,{useEffect,useState,useRef} from 'react'
import Head from 'next/head'
import {HomeMenu} from '../../components/Menu'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaSortDown,FaSortUp } from 'react-icons/fa';
import Slideshow from '../../components/SlideShow'
import dynamic from "next/dynamic";


const ampStoryPlayerUrl = "https://cdn.ampproject.org/amp-story-player-v0";

function getAmpScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src = ampStoryPlayerUrl + ".js";
  ampJS.onload = callback;
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

const playerDo = (containerId, callback) => {
  const player = document.querySelector(`#player2`);
  if (player.isReady) {
    console.log("player is ready");
    callback(player);
  } else {
    console.log("player is not ready");
    player.addEventListener("ready", () => {
      callback(player);
    });
    
  }
  
};

const loadPlayer = (playerRef) => () => {
  console.log("player", playerRef.current);
  if (window.AmpStoryPlayer) {
    console.log("window");
    new window.AmpStoryPlayer(window, playerRef.current).load();
  }
  const lightboxEl = document.querySelector(".lightbox");
  
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
  useAmpStoryPlayer(loadPlayer(playerRef));

  useEffect(()=>{
    setMounted(true)
  },['init'])

  useEffect(()=>{
    const player = document.getElementById("player2");
    const lightboxEl = document.querySelector(".lightbox");
    if (player){
      player.addEventListener("amp-story-player-close", () => {
        player.pause();
        lightboxEl.classList.toggle("show");
      });
    }
  }, [mounted, playerRef])

  // useEffect(()=>{

  //   const player = document.getElementById("player2");
    
  //     const lightboxEl = document.querySelector(".lightbox");
    
  //     if (player.isReady) {
  //       initializeCarousel();
  //     } else {
  //       player.addEventListener("ready", () => {
  //         initializeCarousel();
  //       });
  //     }
    
  //     function initializeCarousel() {
  //       const stories = player.getStories();
    
  //       const thumbnails = document.querySelectorAll(
  //         ".entry-point-card-container .img"
  //       );
  
  //       console.log("OKKK", thumbnails)
    
  //       thumbnails.forEach((img, idx) => {
  //         img.addEventListener("click", () => {
  //           console.log("CLickk")
  //           player.show(stories[idx].href);
  //           player.play();
  //           lightboxEl.classList.toggle("show");
  //         });
  //       });
  //     }
    
  //     player.addEventListener("amp-story-player-close", () => {
  //       player.pause();
  //       lightboxEl.classList.toggle("show");
  //     });
  //   }
  // },[mounted])

  return (
    <>
      <Head>
        <script
          async
          src="https://cdn.ampproject.org/amp-story-player-v0.js"
        ></script>
        <link
          href="https://cdn.ampproject.org/amp-story-player-v0.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div>
        {/* <HomeMenu /> */}
        <main className={styles.main}>
          <h3>Main articles</h3>
          <br></br>
          <div className={styles.editorial}>
            <div className={styles.mainSlideShow}>
              <Slideshow/>
            </div>
            <div className={styles.topArticles}>
              <div className={styles.arrows}>
                <div className={styles.arrow}>
                  <FaSortUp/>
                </div>
                <div className={styles.arrow}>
                  <FaSortDown/>
                </div>
              </div>
              <Link href={"#"}>
                <a>
                  <div className={styles.topArticlesArticle}>
                    <Image
                      src={"https://picsum.photos/500/400"}
                      width="450"
                      height="300"
                      layout="fill"
                      style={{ width: "100%"}}
                      className={styles.img}
                    />
                    <div className={styles.mark_down}>
                      <h5 className={styles.cat}>Catérorie</h5>
                      <p>No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.</p>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href={"#"}>
                <a>
                  <div className={styles.topArticlesArticle}>
                    <Image
                      src={"https://picsum.photos/500/400"}
                      width="450"
                      height="300"
                      layout="fill"
                      style={{ width: "100%" }}
                      className={styles.img}
                    />
                    <div className={styles.mark_down}>
                      <h5 className={styles.cat}>Catérorie</h5>
                      <p>No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.</p>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href={"#"}>
                <a>
                  <div className={styles.topArticlesArticle}>
                    <Image
                      src={"https://picsum.photos/500/400"}
                      width="450"
                      height="300"
                      layout="fill"
                      style={{ width: "100%" }}
                      className={styles.img}
                    />
                    <div className={styles.mark_down}>
                      <h5 className={styles.cat}>Catérorie</h5>
                      <p>No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className={styles.mainPlayer}>
              {mounted &&
              (
                <amp-story-player layout="fill" width="360" height="600" amp-cache="cdn.ampproject.org">
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

              )}
            </div>
          </div>
            <div className="viewport">
              <div className="entry-point-container">
                <h1> Web Stories </h1>
                <div className="circular-entry-point">
                  <div className="entry-points">
                    <div className="entry-point-card-container">
                    <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#FF6F32" }} 
                      onClick={(e)=>{playerDo("the-id", (player) => {
                        console.log("show", player);

                        player.show(
                          "https://wsdemos.uc.r.appspot.com/ampfest/s1"
                        );
                        player.play();
                        player.unmute();
                      });
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
              {mounted &&
                <amp-story-player className="my-player" id="player2" ref={playerRef}
>
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
              }
              </div>
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