import React,{useState} from 'react'
import Head from 'next/head'
import Domaines from '../components/utills/domaines/domaines'
import Caroussel from '../components/caroussel'
import Image from 'next/image'
import Link from 'next/link'
import Popup from '../components/utills/popup/popup'


export default function Home() {


  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta charSet="UTF-8"/>
        <title>DEVELOPPEUR WEB</title>
        <meta name="description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes" />
        <meta name="theme-color" content="#f3f3f3"/>

        {
          /* Lien font googlr */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://princenickballo.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DEVELOPPEUR WEB" />
        <meta property="og:description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes" />
        <meta property="og:image" content="/images/preview.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="princenickballo.fr" />
        <meta property="twitter:url" content="https://princenickballo.fr" />
        <meta name="twitter:title" content="DEVELOPPEUR WEB" />
        <meta name="twitter:description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes" />
        <meta name="twitter:image" content="/images/preview.png" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

      </Head>
      <main>
        <Caroussel />
      </main>
    </>
  )
}