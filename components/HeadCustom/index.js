import React from 'react'
import Head from 'next/head'

export default function HeadCustom({theme="#fff",preview = "/images/preview.png"}) {
  return (
    <Head>
    {/* <!-- HTML Meta Tags --> */}
    <meta charSet="UTF-8" />
    <title>PRINCE NICK BALLO - INGENIEUR LOGICIEL</title>
    <meta name="description" content="Prince Nick BALLO : Ingénieur logiciel, Développeur Full Stack Javascript, Developpeurs de themes et plugins Wordpress, Symfony developpeur, Data anylste python" />
    <meta name="theme-color" content={theme} />

    {/* Lien font googlr */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lobster&display=swap" rel="stylesheet" />
    {/* <!-- Facebook Meta Tags --> */}
    <meta property="og:url" content="https://princenickballo.fr" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="PRINCE NICK BALLO - INGENIEUR LOGICIE" />
    <meta property="og:description" content="Prince Nick BALLO : Ingénieur logiciel, Développeur Full Stack Javascript, Developpeurs de themes et plugins Wordpress, Symfony developpeur, Data anylste pythons" />
    <meta property="og:image" content={preview} />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="princenickballo.fr" />
    <meta property="twitter:url" content="https://princenickballo.fr" />
    <meta name="twitter:title" content="PRINCE NICK BALLO - INGENIEUR LOGICIE" />
    <meta name="twitter:description" content="Prince Nick BALLO : Ingénieur logiciel, Développeur Full Stack Javascript, Developpeurs de themes et plugins Wordpress, Symfony developpeur, Data anylste python" />
    <meta name="twitter:image" content={preview} />

    {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

  </Head>
  )
}
