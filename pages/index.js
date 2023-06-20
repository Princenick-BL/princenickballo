import React , {useRef} from 'react'
import Head from 'next/head'
import Caroussel from '../components/caroussel'
import styles from '../styles/index.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import HeadCustom from '../components/HeadCustom'


export default function Home() {


  return (
    <>
      <HeadCustom/>
      <main>

        <Caroussel />
      </main>
    </>
  )
}


export  function HomeV2() {

  const image = useRef()

  console.log(image)

  return (
    <div className={styles.homeV2}>
      <div className={styles.logo}>
      <Link href={"/"}>Prince ING</Link>
      </div>
      <div className={styles.wrapper}>
          <div className={styles.grid}>
            <div className={styles.item1}>
              <h1 className={styles.type}>Hi, my name is Prince Nick BALLO and I'm a software engineer.</h1>
            </div>
            <div className={styles.item2}>
              <div className={styles.avItem}>
                <div className={styles.img}>
                  <Image 
                    src={"/images/avatar.png"}
                    layout='responsive'
                    width={200}
                    height={200}
                    className={styles.avatar}
                    itemRef={image}
                    />
                </div>
                <div className={styles.circl1}>

                <div className={styles.circl2}>

                </div>
              </div>
              </div>
            </div>
            {/* <div className={styles.item2}>
            </div> */}
            <div className={styles.item3}>"Being an engineer isn't just a title; it's a way of life. It's a way of thinking and acting. Above all, it's about taking pleasure in creating, innovate and bring to life ideas, each as interesting as the next. In short, it's a passion."</div>
            <div className={styles.item4}>
              <ul  >
                <li><Link href={"/skils#software-engineering"}>Software Ingeenering →</Link></li>
                <li><Link href={"/skils#dev-ops"}>Dev Ops →</Link></li>
                <li><Link href={"/skils#bi-and-big-data"}>BI and Big Data →</Link></li>
                <li><Link href={"/skils#ai-and-machine-learning"}>AI and Machine learning →</Link></li>
              </ul>
            </div>
            <div className={styles.item5}><Link href={"/resume"}>About / Resume / Contact →</Link></div>
            <div className={styles.item6}><Link href={"/creations"}> → Get all my creations ←</Link></div>
          </div>
      </div>
    </div>
  )
}
