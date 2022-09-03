import React,{useState} from 'react'
import Head from 'next/head'
import MediaLeft from '../components/utills/media.left/media.left'
import Domaines from '../components/utills/domaines/domaines'
import Caroussel from '../components/caroussel'
import Image from 'next/image'
import Link from 'next/link'
import Popup from '../components/utills/popup/popup'


export default function Home() {

  const [show_auth,setShowAuth]=useState(false)

  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta charSet="UTF-8"/>
        <title>DEVELOPPEUR WEB</title>
        <meta name="description" content="Prenez plaisir à me découvrir à travers mes compétences et mes aptitudes" />
        <meta name="theme-color" content="#f0f0f0"/>

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


      <div className="index LayoutVerticalœ">

        <MediaLeft />

        <div className="ml50">

          <div className="one">
            <Caroussel />
            <svg fill="transparent" preserveAspectRatio="none" viewBox="0 0 1680 40" class="banner" style={{bottom: "-1px"}}>
              <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
            </svg>
          </div>

          <div id="ancre2" className="two center-vertical pg2">

            <h1>CE QUE JE PEUX FAIRE</h1>

            <span className="underlinexxs"></span>

            <div className="competences">

              <div className="competenceLeft">
                <div className="title">
                  {"CRÉATION D'APPLICATION WEB"}
                </div>
                <div className="description">
                  {"  De la conception du site web, à son déploiement, seul ou en équipe en passant par le choix des technologies "}
                </div>
              </div>

              <div className="competenceRight">
                <div className="title">
                  {"SITE WEB RESPONSIVE"}
                </div>
                <div className="description">
                  {"  Un site web qui s'adapte à tout type d'interface. Que ce soit sur ordinateur portable, telephone mobile ou tablette."}
                </div>
              </div>

              <div className="competenceLeft">
                <div className="title">
                  {" INTÉGRATION WEB"}
                </div>
                <div className="description">
                  {" Integration HTML/CSS à partir d'une maquette en restant fidèle à cette dernière."}
                </div>
              </div>

              <div className="competenceRight">
                <div className="title">
                  {"CONCEPTION GRAPHIQUE"}
                </div>
                <div className="description">
                  {"Realisation de logo, flyers, plaquette publicitaire etc ..."}
                </div>
              </div>

            </div>

          </div>

          <div className="three">
            <div className="container">
              <div className="head">
                <h3>{"DES SITES WEB RESPONSIVES ADAPTÉS À TOUT TYPE    D'INTERFACE"}</h3>
              </div>
              <Image className="img" alt="img" src="/images/screen.png" layout="fill" />
            </div>
            
          </div>
          <div className="competencesT">
              <h1>{"Mes compétences techniques"}</h1>
              <div className="competencesTC orientationH ">
                
                <div className="items">
                  <p>HTML</p>
                  <div className="container">
                    <div className="skills html">90%</div>
                  </div>

                  <p>CSS</p>
                  <div className="container">
                    <div className="skills css">90%</div>
                  </div>

                  <p>JavaScript</p>
                  <div className="container">
                    <div className="skills js">95%</div>
                  </div>

                  <p>PHP</p>
                  <div className="container">
                    <div className="skills php">60%</div>
                  </div>
                  <p>Python</p>
                  <div className="container">
                    <div className="skills python">60%</div>
                  </div>

                  <p>C</p>
                  <div className="container">
                    <div className="skills next">90%</div>
                  </div>

                  <p>Matlab</p>
                  <div className="container">
                    <div className="skills matlab">90%</div>
                  </div>
                </div>

                <div className="items">
                  <p>Next.js</p>
                  <div className="container">
                    <div className="skills next">80%</div>
                  </div>

                  <p>React.js</p>
                  <div className="container">
                    <div className="skills react">80%</div>
                  </div>

                  <p>Node.js</p>
                  <div className="container">
                    <div className="skills node">85%</div>
                  </div>

                  <p>Android Studio</p>
                  <div className="container">
                    <div className="skills android">75%</div>
                  </div>

                  <div className="database">
                    <div className="mysql"></div>
                    <div className="mongo"></div>
                    <div className="postgre"></div>
                    <div className="aws"></div>
                  </div>
                </div>

              </div>
          </div>

          <div className="four">
            <div className="portfolio">
              <h1>MES PROJETS</h1>
              <div className="projets">
                <div className="projet">
                  <div>
                    <div className="img phenix"></div>
                    <div className="desc">
                      <div className="title">
                        A-Recruit ( Confidentiel )
                      </div>
                      <div className="stack ">
                        <div>Next.js </div>
                        <div>Node.js </div>
                        <div>Express.js </div>
                        <div>HTML</div>
                        <div>SCSS </div>
                        <div>JavaScript</div>
                        <div>Postgresql </div>
                        <div>AWS </div>
                      </div>
                      <div className="linkzone"> 
                        <a href="#"  className="desable">{"Lien Protégé ( Projet d'entreprise )"} &#x2192;</a>
                      </div>
                    </div>
                  </div>
                  <div className="description">
                      {"Il s'agit de la création avec une équipe de developpeur, d'un logiciel embarquant plusieurs outils de travail et plusieurs fonctionnalités pour les besoins de l'entreprise."}                    
                  </div>
                   
                </div>
              
                <div className="projet">
                  <div>
                    <div className="img my-app"></div>
                    <div className="desc">
                      <div className="title">
                        Mon site web
                      </div>
                      <div className="stack ">
                        <div>Next.js </div>
                        <div>HTML</div>
                        <div>SCSS </div>
                        <div>JavaScript</div>

                      </div>
                      <div className="linkzone"> 
                        <a href="https://github.com/Princenick-BL/my-app">Lien GitHub &#x2192;</a>
                      </div>
                    </div>
                  </div>
                  <div className="description">
                      {"Il s'agit de cette page que vous consultez."+
                      "Je l'ai réalisé avec le framework Next.js avec"+
                      " les langages comme le HTML, le CSS, le JavaScript"+
                      " et en utilisant les outils de photoshop."}                    
                  </div>
                </div>
                  
                <div className="projet">
                  <div>
                    <div className="img  ga-eilco"></div>
                    <div className="desc">
                      <div className="title">
                        GA-EILCO
                      </div>
                      <div className="stack ">
                        <div>React.js</div>
                        <div>Next.js </div>
                        <div>Express.js </div>
                        <div>HTML</div>
                        <div>CSS </div>
                        <div>JavaScript</div>
                        <div> Mysql </div>
                      </div>
                      <div className="linkzone"> 
                        <a href="#" className="desable">{"Lien Protégé ( Projet d'entreprise )"} &#x2192;</a>
                      </div>
                    </div>
                    </div>
                    <div className="description">
                      {"A la tête d'une équipe de développeur,"+
                      "il fallait developper un outil centralisé,"+
                      "du système de gestion des absences d'une université ."}
                    </div>
                  </div>

                  <div className="projet">
                    <div>
                      <div className="img  mon-cv"></div>
                      <div className="desc">
                        <div className="title">
                          Mes début avec React.js ( CV React)
                        </div>
                        <div className="stack ">
                          <div>React.js</div>
                          <div>HTML</div>
                          <div>CSS </div>
                          <div>JavaScript</div>
                        </div>
                        <div className="linkzone"> 
                        <a href="https://github.com/Princenick-BL/curriculum-vitae">Lien GitHub &#x2192;</a>
                        <br></br>
                        <br></br>
                          <Link href="https://princenick-bl.github.io/curiculum-vitae">
                            <a>{"Lien vers le site"} &#x2192;</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      {"Prise en main de React.js avec la réalisation ,"+
                        " d'un cv web."}
                    </div>
                  </div>


                  <div className="projet">
                  <div>
                    <div className="img  auth"></div>
                    <div className="desc">
                      <div className="title">
                        Google - Facebook authentification
                      </div>
                      <div className="stack ">
                        <div>React.js {"&"} Node.js</div>
                        <div>HTML</div>
                        <div>CSS </div>
                        <div>JavaScript</div>
                        <div> Mysql </div>
                        <div> Google auth api </div>
                        <div> Facebook auth api </div>
                      </div>
                      <div className="linkzone"> 
                        <a href="https://github.com/Princenick-BL/login-signin-app">Lien GitHub &#x2192;</a>
                        <br></br>
                        <br></br>
                        {show_auth && 
                          <>
                            <Popup
                              show_hide={show_auth}
                              callback={(e)=>{setShowAuth(false)}}
                            >
                              <iframe className="video" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6784459821665148928?compact=1" allowFullScreen="" title="Post intégré" width="504" height="284" frameBorder="0"></iframe>
                            </Popup>
                          </>
                        }
                        <a href="#" onClick={(e)=>{e.preventDefault();setShowAuth(true)}}>Lien de présentation &#x2192;</a>
                      </div>
                    </div>
                    </div>
                    <div className="description">
                      {"Il est question ici d'une application"+
                      " permettant de s'authentifier en utilisant"+
                      " son compte google ou facebook."}
                    </div>
                  </div>
                  <div className="projet">
                    <div>
                      <div className="img  covid"></div>
                        <div className="desc">
                          <div className="title">
                            Gestion de cas COVID en entreprise
                          </div>
                          <div className="stack ">
                            <div>HTML</div>
                            <div>CSS </div>
                            <div>JavaScript</div>
                            <div>PHP</div>
                            <div> Mysql </div>
                          </div>
                          <div className="linkzone"> 
                            <a href="https://github.com/Princenick-BL/login-signin-app">Lien GitHub &#x2192;</a>
                            
                          </div>
                        </div>
                      </div>
                      
                      <div className="description">
                        {"C'est une application pour le suivi de "+
                        "l'évolution de la covid-19 au sein d'une "+
                        "entreprise et de la gestion du personnel. "+
                        "Elle a été réalisée en équipe avec la mise "+
                        "en pratique des méthodes agiles."}
                      </div>

                  </div>
                  
              </div>

              
            </div>
          </div>

          <div className="lastbtn">
              <a className="btn" href="https://www.canva.com/design/DAEmEjXbW4o/gCRThwtadt3lfBB8eG-ypg/view?website#1">
                  CONSULTER MON CV COMPLET
              </a>
          </div>

        </div>

      </div>

    </>
  )
}