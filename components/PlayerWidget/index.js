import React,{useRef,useEffect,useState} from 'react'
import styles from './index.module.scss'
import Player from './Player'
import Image from 'next/image'
import { categories } from '../../constants'

export default function PlayerWidget({
    title,
    img,
    logo,
    url ,
    category
}) {

    const [show,setShow] = useState(false)

    

    return (
        <a className={styles.widget} href={url} target={"_blank"} rel="noreferrer">
            <div 
                className={styles.preview} 
                onClick={(e)=>{setShow(true)}}
                style={{backgroundImage : `url(${img})`}}
            > 
                <div className={styles.calc}>
                    <div className={styles.webStoryIcon}></div>
                    <div className={styles.title}>
                        <p className={styles.category}>
                            {category}
                        </p>
                        <p>
                            {title}
                        </p>
                    </div>
                </div>
            </div>
            {/* {show &&
                <div className={styles.overlay}>
                    <svg 
                        onClick={(e)=>{setShow(false)}}
                        x="0px" 
                        y="0px"
                        width="41.756px" 
                        height="41.756px" 
                        viewBox="0 0 41.756 41.756" 
                        style={{
                            position: "absolute",
                            right : "1rem",
                            top : "1rem",
                            enableBackground:"new 0 0 41.756 41.756",
                        }}
                    >
                            <g>
                                <path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
                                    c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
                                    C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
                                    c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"/>
                            </g>

                    </svg>
                    {show &&
                        <div
                            id="player-widget"
                            className={styles.widget}
                        >
                            <Player/>
                        </div>
                    }
                </div>
            } */}
        </a>
    )
}