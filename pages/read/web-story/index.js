import React,{useState,useEffect,Suspense}  from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.scss'
import StoryPreview from '../../../components/StoryPreview'
import { getStories } from '../../../services/stories'
import {
  FireOutlined,
  TabletOutlined
} from '@ant-design/icons';
import {HomeMenu as Menu} from '../../../components/Menu'
import Loading from '../../../Loading'
import { useRouter } from 'next/router'
import Script from 'next/script'
import * as gtag from '../../../lib/gtag'
import Pagination from '../../../components/Pagination'

export default function Articles({stories,hasNext}) {

  const router = useRouter()
  const {page} = router?.query

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"></link>
        </Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <div className={styles.container}>
          <Menu/>
          <main className={styles.main}>
              {/* <br></br>
              <input className={"searchInput"} type={"search"} placeholder='Search ...'/>
              <br></br> */}
               <br></br>
              <br></br>
              <br></br>
              <div className={styles.flex}>
                <h3> Stories</h3>
              </div>
              <br></br>
              <div className={styles.wrapper2}>
                
                { stories?.length >0 ? stories?.map((article,index)=>{
                  return(
                    <div key={index}>
                      <StoryPreview article={article} type={3}/>
                    </div> 
                  )
                }):(
                  <Loading/>
                )}
                </div>
                <Pagination
                  url={"/web-story"}
                  current={page ? parseInt(page) : 1}
                  hasNext={hasNext}
                />
          </main>

          <footer className="ampstart-footer flex flex-column items-center px3">
            <nav className="ampstart-footer-nav">
                <ul className="list-reset flex flex-wrap mb3">
                  <li className="px1">
                      <a className="text-decoration-none ampstart-label" href="#">About</a>
                  </li>
                  <li className="px1">
                      <a className="text-decoration-none ampstart-label" href="#">Contact</a>
                  </li>
                  <li className="px1">
                      <a className="text-decoration-none ampstart-label" href="#">Terms</a>
                  </li>
                </ul>
            </nav>
            <small> © Your Company, 2016 </small>
          </footer>
        </div>
    </>
  )
}

export async function getStaticProps(context) {
  // Fetch data from external API
  
  const res = await getStories()
  const data = res?.data
  const stories = data?.splice(0,12)

  return { 
      props: {
        stories : stories || [],
        hasNext : data?.length > 0

      } 
  }
}
