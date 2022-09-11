import React,{useState,useEffect,Suspense}  from 'react'
import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import ArticlePreview from '../../../components/ArticlePreview'
import { getArticle } from '../../../services/articles'
import {HomeMenu as Menu} from '../../../components/Menu'
import Loading from '../../../Loading'
import { useRouter } from 'next/router'
import Script from 'next/script'
import * as gtag from '../../../lib/gtag'

export default function Articles({articles}) {

  const router = useRouter()

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
              <div className={styles.flex}>
                <h3> Articles</h3>
              </div>
              <br></br>
              <div className={styles.wrapper2}>
                
                { articles?.length >0 ? articles?.map((article,index)=>{
                  return(
                    <div key={index}>
                      <ArticlePreview article={article} type={3}/>
                    </div> 
                  )
                }):(
                  <Loading/>
                )}
                </div>
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

export async function getServerSideProps(context) {
  // Fetch data from external API
  
  const res = await getArticle()

  return { 
      props: {
        articles : res?.data || []
      } 
  }
}