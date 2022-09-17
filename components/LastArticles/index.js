import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'


const Card = () =>{
    return(
        <div className={styles.card} >
            <div className={styles.publisher}>
                <Image
                    src={"https://picsum.photos/500/400"}
                    width="40"
                    height="40"
                    layout="fixed"
                    className={styles.publisher_logo}
                />
                <div className={styles.name}>Published by <strong>Prince Nick Ballo</strong> on Sep,14,2022</div>
            </div>
            <br></br>
            <div className={styles.title}>
                <h1>
                    Pourquoi choisir react js au lieu de next js et vis versa
                </h1>
                <span>{"ReactJS - Web - Web3 - Javascript"}</span>
            </div>
            <div className={styles.read}>150 read</div>
        </div>
    )
}

export default function LasrArticle() {

    const [data,setData] = useState([
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        },
        {
            id:1,
        }
    ])

  return (
    <div className={styles.wrapper}>

        <div classNamz={styles.container} style={{
            display:"flex",
            width: "100%",
            height: "max-content",
            overflowY: "hidden",
            paddingTop: "3rem",
            paddingBottom: ".5rem"
        }}>
            <div className={styles.mostreadedArticle}>
                <div className={styles.title}>
                    <span>
                        scroll left
                    </span>
                    <br></br>
                    <div>
                        MOST READED ARTICLES
                    </div>
                </div>
            </div>
            {data.map((card=>{
                return(
                    <Card/>
                )
            }))}
           
        </div>
    </div>
  )
}
