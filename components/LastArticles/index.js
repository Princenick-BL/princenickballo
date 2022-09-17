import React,{useState,useEffect} from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from 'react-icons/fa';


const Card = ({card}) =>{
    return(
        <div className={styles.card} style={{borderColor:card?.color?card?.color:"var(--color-primary)"}}>
            <div className={styles.publisher}>
                <Image
                    src={card?.author?.logo}
                    width="40"
                    height="40"
                    layout="fixed"
                    className={styles.publisher_logo}
                />
                <div className={styles.name}>Published by <strong>{card?.author?.name}</strong> on {card?.date}</div>
            </div>
            <br></br>
            <div className={styles.title}>
                <h1>
                    {card?.title}
                </h1>
                <div className={styles.titlebottom}>
                    <Link href='/'>
                        <a >{"Read >>"}</a>
                    </Link>
                    <span>{card.keywords?.join(" - ")}</span>
                </div>
            </div>
            <div className={styles.read}><FaEye/>&nbsp;&nbsp;{card?.reads} </div>
        </div>
    )
}

export default function LasrArticle() {

    const [data,setData] = useState([
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color : '#FF6F32',

        },
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color :"#E6AD1C" ,

        },
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color : "#466FFF",

        },
        {
            author : {
                name :"Prince Nick BALLO",
                logo : "https://assets.codepen.io/1780597/4.png"
            },
            date : "2022-09-17",
            reads : "300",
            keywords : ["ReactJS","NextJs","Web","Web3"],
            title : "Pourquoi choisir react js au lieu de next js et vis versa",
            color : "#4CA47C",

        },
       
    ])

  return (
    <div className={styles.wrapper}>

        <div className={styles.container} style={{
            
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
            {data.map(((card,index)=>{
                return(
                    <Card key={index} card={card}/>
                )
            }))}
           <div className={styles.mostreadedArticleMore}>
                
                <div>
                    <Link href="/">
                        <a> Read more. </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
