import React from 'react'
import Head from 'next/head'
import {HomeMenu} from '../../components/Menu'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaSortDown,FaSortUp } from 'react-icons/fa';

export default function ReadIndex() {
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
          <h3 className={styles.h3Title}>Main articles</h3>
          <br></br>
          <div className={styles.editorial}>
            <div className={styles.mainSlideShow}>
              <Link href={"#"}>
                <a>
                  <div className={styles.slide}>
                    <Image
                      src={"https://picsum.photos/500/400"}
                      width="450"
                      height="300"
                      layout="fill"
                      style={{width:"100%",height:"100%"}}
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
        </main>
      </div>
    </>
  )
}
