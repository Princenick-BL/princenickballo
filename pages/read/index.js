import React,{useEffect,useState,useRef} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../components/Logo'
import LasrArticle from '../../components/LastArticles'
import Footer from '../../components/footer/footer'
import Pagination from '../../components/Pagination'
import Slide from '../../components/CardView'
import { getArticle ,getTopArticles} from '../../services/articles'
import TheSideBar from '../../components/ThesideBar'
import Head from 'next/head'

//export const config = { amp: true };


const ampStoryPlayerUrl = "https://cdn.ampproject.org/amp-story-player-v0";

function getAmpPlayerScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src ="https://cdn.ampproject.org/amp-story-player-v0.js";
  //ampJS.onload = callback;
  return ampJS;
}

function getAmpScript(callback) {
  const ampJS = document.createElement("script");
  ampJS.async = true;
  ampJS.src ="https://cdn.ampproject.org/v0/amp-story-player-0.1.js";
  //ampJS.onload = callback;
  return ampJS;
}

function getAmpCss() {
  const ampCSS = document.createElement("link");
  ampCSS.href = "https://cdn.ampproject.org/v0.css";
  ampCSS.rel = "stylesheet";
  ampCSS.type = "text/css";

  return ampCSS;
}

const useAmpStoryPlayer = (callback) => {
  useEffect(() => {
    console.log("useAmpStoryPlayer");
    const ampScript = document.querySelector(
      `script[src="https://cdn.ampproject.org/v0/amp-story-player-0.1.js"]`
    );
    if (!ampScript) {
      document.head.appendChild(getAmpScript(callback));
      document.head.appendChild(getAmpPlayerScript(callback));

      //document.head.appendChild(getAmpCss());
    }
  }, []);
};


const loadPlayer = (playerRef) => () => {
  const player = document.getElementById("player2");
  if (player) {
    player.load();
  }

  // playerRef.current.add([
  //   {
  //     href:
  //       "https://stories.marmiton.org/menu-de-la-semaine-4-10-janvier-dE3b4YkgP/"
  //   }
  // ]);
  
};

async function initializeWidget(idx) {
  const player = document.getElementById("player2");
  var stories = player.getStories();
  player.show(stories[idx].href, null, {animate: true});
  player.play();
}


const Widget = ({img,pos,color,text,url,onclick}) =>{
    return(
        <div className="entry-point-card-container" 
          onClick={(e)=>{        
            onclick()
            document.getElementById("mainContent").style.overflowY="hidden"
            initializeWidget(pos)
        }}>
            <div className='img-container' style={{ 
                    borderColor: `${color} !important`,
                    border: `2px solid ${color}`,

                  }}>
              <Image 
                  className='img' width={100} height={100} src={img}/>

            </div>
            <div>
            <span className="entry-point-card-title">{text}</span>
            </div>
        </div>
    )
}

function ReadIndex({topA,page1}) {


  const playerRef = useRef(null);
  //useAmpStoryPlayer(loadPlayer(playerRef))

  const [show,setShow]=useState(false)
    
    
  const [stories,setStories] = useState([
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s1",
        img : 'https://assets.codepen.io/1780597/4.png',
        color : '#FF6F32',
        text : 'Q&A with ZOE Newman'
    },
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s2",
        img : "https://assets.codepen.io/1780597/1.png" ,
        color :"#E6AD1C" ,
        text : "24 Hours in New York City"
    },
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s3",
        img : "https://assets.codepen.io/1780597/3.png" ,
        color : "#466FFF",
        text : "The Next King of the Sea"
    },
    {
        url: "https://wsdemos.uc.r.appspot.com/ampfest/s4",
        img : "https://assets.codepen.io/1780597/2.png",
        color : "#4CA47C",
        text : "Spark a Passion for Reading"
    }
])


  useEffect(()=>{
    const player = document.getElementById("player2");
    var script = document.createElement("script")
    script.type="application/json"
    script.innerHTML=`
      {
        "behavior": {
          "autoplay": false,
          "pageScroll": false
        },
        "controls": [{
          "name": "close",
          "position": "start"
        }]
      }
    `
    player.appendChild(script)

    player.addEventListener("amp-story-player-close", () => {
      document.getElementById("mainContent").style.overflowY="auto"
        player.pause();
        setShow(false)
    });

    
    player.addEventListener("ready", () => {
      player.play()
      initializeWidget(0);
      player.pause()
    });
    
  }, [])
 
  return (
    <>
      <Head>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script
    async
    custom-element="amp-story-player"
    src="https://cdn.ampproject.org/v0/amp-story-player-0.1.js"
  ></script>
      </Head>
      <div id="mainContent">
        {/* <HomeMenu /> */}
        <main className={styles.main} >
          <div className={styles.head}>
            <Logo style={{fontSize:"2rem"}}/>
            {/* <h3>Main articles</h3> */}
          </div>
          <div className="viewport">
            <div className="entry-point-container">
              <h1> Web Stories </h1>
              <div className="circular-entry-point">
                <div className="entry-points">
                  {stories.map((story,index)=>{
                    return(
                        <Widget
                            key={index}
                            pos={index}
                            img={story.img}
                            color = {story.color}
                            text = {story.text}
                            url={story.url}
                            onclick={(e)=>{setShow(!show)}}
                        />
                    )
                  })}
                </div>
                <LasrArticle topA={topA}/>

              </div>
            </div>
            <br></br>

            <div className={`lightbox ${show?"show":""}`}>
              {/* <div className={styles.side}>

              </div> */}
              <amp-story-player style={{width:"100vw",height:"100vh"}} layout="responsive" width="360" height="600"id="player2" >
                {stories.map((story,index)=>{
                    return(
                      <a key={index} href={story?.url}></a>
                    )
                  })}
              </amp-story-player>
            </div>
          </div>          
          <div className={styles.editorial}>
            <div className={styles.mainSlideShow}>
              {page1.map((article,index)=>{
                return(
                  <Slide key={index} article={article} style={{paddingBottom:".5rem"}}/>
                )
              })}
            </div>
            <TheSideBar/>
          </div>
          <br></br>
          <br></br>
          <Pagination/>
          <br></br>
          <br></br>
          <Footer/>
        </main>
      </div>
    </>
  )
}
// export default dynamic(() => Promise.resolve(ReadIndex), {
//   ssr: false,
// });

export default ReadIndex


export async function getServerSideProps(context) {
  // Fetch data from external API

  const page1 =  await getArticle({filter:{
    page : 1
  }})

  const topA =  await getTopArticles()

  //console.log(res.length)

  return { 
      props: {
        page1 : page1 || [],
        topA : topA || []
      } 
  }
}