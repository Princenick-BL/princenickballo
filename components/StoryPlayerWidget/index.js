import React,{useState,useEffect,useRef} from 'react'
import Image from 'next/image';
import styles from './index.module.scss'
import LasrArticle from '../LastArticles'


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
            //initializeWidget(pos)
        }}>
            <Image 
                className='img' width={100} height={100} src={img}  
                style={{ 
                  borderColor: `${color} !important`,
                  border: `2px solid ${color}`,

                }}
                
            />
            <div>
            <span className="entry-point-card-title">{text}</span>
            </div>
        </div>
    )
}

export default function StoryPlayerWidget() {

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

    const playerRef = useRef(null);

    
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
    },['init'])

   


    useEffect(()=>{
      const player = document.getElementById("player2");
      const lightboxEl = document.querySelector(".lightbox");

      player.addEventListener("amp-story-player-close", () => {
         document.getElementById("mainContent").style.overflowY="auto"

          player.pause();
          setShow(false)
      });

      
      if (player){
        player.addEventListener("ready", () => {
          initializeWidget(0);
        });
      }
    }, [playerRef])

  return (
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
                <LasrArticle/>

              </div>
            </div>
            <br></br>

            <div className={`lightbox ${show?"show":""}`}>
              {/* <div className={styles.side}>

              </div> */}
              <amp-story-player className="my-player" id="player2"  amp-cache="cdn.ampproject.org">
                {stories.map((story,index)=>{
                    return(
                      <a key={index} href={story?.url}></a>
                    )
                  })}
              </amp-story-player>
            </div>
          </div>
  )
}
