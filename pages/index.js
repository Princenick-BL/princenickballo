import React,{useState} from 'react'
import Head from 'next/head'
import Caroussel from '../components/caroussel'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {


  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta charSet="UTF-8"/>
        <title>PRINCE NICK BALLO - INGENIEUR LOGICIEL</title>
        <meta name="description" content="Prince Nick BALLO : Ingénieur logiciel, Développeur Full Stack Javascript, Developpeurs de themes et plugins Wordpress, Symfony developpeur, Data anylste python" />
        <meta name="theme-color" content="#f3f3f3"/>

        {
          /* Lien font googlr */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://princenickballo.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PRINCE NICK BALLO - INGENIEUR LOGICIE" />
        <meta property="og:description" content="Prince Nick BALLO : Ingénieur logiciel, Développeur Full Stack Javascript, Developpeurs de themes et plugins Wordpress, Symfony developpeur, Data anylste pythons" />
        <meta property="og:image" content="/images/preview.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="princenickballo.fr" />
        <meta property="twitter:url" content="https://princenickballo.fr" />
        <meta name="twitter:title" content="PRINCE NICK BALLO - INGENIEUR LOGICIE" />
        <meta name="twitter:description" content="Prince Nick BALLO : Ingénieur logiciel, Développeur Full Stack Javascript, Developpeurs de themes et plugins Wordpress, Symfony developpeur, Data anylste python" />
        <meta name="twitter:image" content="/images/preview.png" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

      </Head>
      <main>
        <Caroussel />
      </main>
    </>
  )
}