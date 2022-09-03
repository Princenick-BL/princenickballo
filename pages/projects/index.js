import React,{useState} from 'react'
import Link from 'next/link';
import Head from 'next/head';
import styles from './index.module.scss'
import Domaines from '../../components/utills/domaines/domaines'
import Popup from '../../components/utills/popup/popup'
import Image from 'next/image';
import ProjectCard from '../../components/ProjectCard';
import { FaHome } from 'react-icons/fa';
export default function Projets() {

  const [show_auth,setShowAuth]=useState(false)

  return (
    <div className={styles.container}>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta charSet="UTF-8"/>
        <title>PROJETS</title>
        <meta name="description" content="Projet logiciels" />
        <meta name="theme-color" content="#fff"/>

        {
          /* Lien font googlr */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://princenickballo.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PROJETS" />
        <meta property="og:description" content="Projet logiciels" />
        <meta property="og:image" content="/images/preview.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="princenickballo.fr" />
        <meta property="twitter:url" content="https://princenickballo.fr" />
        <meta name="twitter:title" content="PROJETS" />
        <meta name="twitter:description" content="Projet logiciels" />
        <meta name="twitter:image" content="/images/preview.png" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

      </Head>

      <div className="index LayoutVerticalœ">
          {/* <div className="one">
            <svg fill="transparent" preserveAspectRatio="none" viewBox="0 0 1680 40" className="banner" style={{bottom: "-1px"}}>
            <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff" className='path'></path>
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
                </div> */}

          <div className="four">
            <div className="portfolio">
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <p>{new Date().toDateString()}</p>
                  <h1 style={{color:"var(--color-primary)"}}>MES PROJETS</h1>
                </div>
                <Link href={"/"}>
                  <a>
                    <FaHome fontSize={24}/>
                  </a>
                </Link>
              </div>
              <div className="projets">
                <ProjectCard
                  data = {{
                    url : "/images/phenix.jpg",
                    title : "A-Recruit ( Confidentiel )",
                    desc : "Il s'agit de la création avec une équipe de developpeur, d'un logiciel embarquant plusieurs outils de travail et plusieurs fonctionnalités pour les besoins de l'entreprise."
                  }}
                />

                <ProjectCard
                  odd={true}
                  data = {{
                    url : "/images/my-app.png",
                    title : "Mon site web",
                    desc : "Il s'agit de cette page que vous consultez. Je l'ai réalisé avec le framework Next.js avec les langages comme le HTML, le CSS, le JavaScript et en utilisant les outils de photoshop."
                  }}
                />
              
              
                <ProjectCard
                  odd={true}
                  color="#3da8dd"
                  data = {{
                    url : "/images/ga-eilco.png",
                    title : "GA-EILCO",
                    desc : "A la tête d'une équipe de développeur, il fallait developper un outil centralisé, du système de gestion des absences d'une université ."
                  }}
                />
           

                <ProjectCard
                  odd={true}
                  color="rgb(91, 117, 215)"
                  data = {{
                    url : "/images/cv.png",
                    title : "Mes début avec React.js ( CV React)",
                    desc :"Prise en main de React.js avec la réalisation , d'un cv web."
                  }}
                />

                <ProjectCard
                  data = {{
                    url : "/images/auth.png",
                    title : "Google - Facebook authentification",
                    desc :"Il est question ici d'une application"+
                    " permettant de s'authentifier en utilisant"+
                    " son compte google ou facebook."
                  }}
                />

                <ProjectCard
                  odd={true}
                  color="blue"
                  data = {{
                    url : "/images/covid.png",
                    title : " Gestion de cas COVID en entreprise",
                    desc :"C'est une application pour le suivi de "+
                    "l'évolution de la covid-19 au sein d'une "+
                    "entreprise et de la gestion du personnel. "+
                    "Elle a été réalisée en équipe avec la mise "+
                    "en pratique des méthodes agiles."
                  }}
                />

              </div>

              
            </div>
          </div>
          <br></br>

          {/* <div className="lastbtn">
              <a className="btn" href="https://www.canva.com/design/DAEmEjXbW4o/gCRThwtadt3lfBB8eG-ypg/view?website#1">
                  CONSULTER MON CV COMPLET
              </a>
          </div> */}

      </div>
    </div>
  )
}
