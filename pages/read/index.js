import React,{useEffect} from 'react'
import Head from 'next/head'
import {HomeMenu} from '../../components/Menu'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaSortDown,FaSortUp } from 'react-icons/fa';
import Slideshow from '../../components/SlideShow'

export default function ReadIndex() {
  useEffect(()=>{

    const player = document.body.querySelectorAll("amp-story-player")[1];
    const lightboxEl = document.querySelector(".lightbox");
  
    if (player.isReady) {
      initializeCarousel();
    } else {
      player.addEventListener("ready", () => {
        initializeCarousel();
      });
    }
  
    function initializeCarousel() {
      const stories = player.getStories();
  
      const thumbnails = document.querySelectorAll(
        ".entry-point-card-container .img"
      );

      console.log("OKKK", thumbnails)
  
      thumbnails.forEach((img, idx) => {
        img.addEventListener("click", () => {
          player.show(stories[idx].href);
          player.play();
          lightboxEl.classList.toggle("show");
        });
      });
    }
  
    player.addEventListener("amp-story-player-close", () => {
      player.pause();
      lightboxEl.classList.toggle("show");
    });
  })

  return (
    <>
      <Head>
        <script
          async
          src="https://cdn.ampproject.org/amp-story-player-v0.js"
        ></script>
        <script custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js" async></script>
        <link
          href="https://cdn.ampproject.org/amp-story-player-v0.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div>
        <HomeMenu />
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
            </div>
          </div>
            <div class="viewport">
              <div class="entry-point-container">
                <h1> Web Stories </h1>
                <div class="circular-entry-point">
                  <div class="entry-points">
                    <div class="entry-point-card-container">
                      <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#FF6F32"}}/>
                      <div>
                        <span class="entry-point-card-title">Q&A with ZOE Newman</span>
                      </div>
                    </div>
                    <div class="entry-point-card-container">
                      <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#E6AD1C" }} />
                      <div>
                        <span class="entry-point-card-title">24 Hours in New York City</span>
                      </div>
                    </div>
                    <div class="entry-point-card-container">
                      <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#466FFF" }}/>
                      <div>
                        <span class="entry-point-card-title">The Next King of the Sea</span>
                      </div>
                    </div>
                    <div class="entry-point-card-container">
                      <Image className='img' width={100} height={100} src="https://picsum.photos/100/100" style={{ borderColor: "#4CA47C" }} />
                      <div>
                        <span class="entry-point-card-title">Spark a Passion for Reading</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>

              <div class="lightbox">
                <amp-story-player class="my-player">
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
        </main>
      </div>
    </>
  )
}
