import React from 'react'
import styles from './index.module.scss'
import HeadCustom from '../../components/HeadCustom'
import Link from 'next/link'
import Image from 'next/image'

import softIng from '../../public/images/software-ing-view.png'
import devOps from '../../public/images/dev-ops-ing-view.png'
import biangbigData from '../../public/images/bi-big-data-ing-view.png'
import aiAndMl from '../../public//images/machine-learning-ing-view.png'


const skils = [
  {
    id: "software-engineering-1",
    title : "Software Ingeenering",
    description : "Mollit laborum non minim velit esse ea qui. Dolore ad dolore consectetur sint proident sunt proident occaecat est enim nisi id velit dolore. Cupidatat minim nisi ipsum ipsum proident nostrud in adipisicing elit culpa velit. Irure id sint elit veniam nulla deserunt ut occaecat voluptate culpa esse et. Fugiat ipsum velit eu sint Lorem ex qui. Incididunt exercitation velit cupidatat dolor officia quis fugiat. Exercitation sit ullamco ullamco enim magna veniam elit Lorem amet.",
    img : softIng
  },
  {
    id: "dev-ops",
    title : "Dev Ops",
    description : "Mollit laborum non minim velit esse ea qui. Dolore ad dolore consectetur sint proident sunt proident occaecat est enim nisi id velit dolore. Cupidatat minim nisi ipsum ipsum proident nostrud in adipisicing elit culpa velit. Irure id sint elit veniam nulla deserunt ut occaecat voluptate culpa esse et. Fugiat ipsum velit eu sint Lorem ex qui. Incididunt exercitation velit cupidatat dolor officia quis fugiat. Exercitation sit ullamco ullamco enim magna veniam elit Lorem amet.",
    img : devOps
  },
  {
    id: "bi-and-big-data",
    title : "BI and Big Data",
    description : "Mollit laborum non minim velit esse ea qui. Dolore ad dolore consectetur sint proident sunt proident occaecat est enim nisi id velit dolore. Cupidatat minim nisi ipsum ipsum proident nostrud in adipisicing elit culpa velit. Irure id sint elit veniam nulla deserunt ut occaecat voluptate culpa esse et. Fugiat ipsum velit eu sint Lorem ex qui. Incididunt exercitation velit cupidatat dolor officia quis fugiat. Exercitation sit ullamco ullamco enim magna veniam elit Lorem amet.",
    img : biangbigData
  },
  {
    id: "ai-and-machine-learning",
    title : "AI and Machine learning",
    description : "Mollit laborum non minim velit esse ea qui. Dolore ad dolore consectetur sint proident sunt proident occaecat est enim nisi id velit dolore. Cupidatat minim nisi ipsum ipsum proident nostrud in adipisicing elit culpa velit. Irure id sint elit veniam nulla deserunt ut occaecat voluptate culpa esse et. Fugiat ipsum velit eu sint Lorem ex qui. Incididunt exercitation velit cupidatat dolor officia quis fugiat. Exercitation sit ullamco ullamco enim magna veniam elit Lorem amet.",
    img : aiAndMl
  }
]

export default function Skils() {

  return (
    <>
      <HeadCustom theme='#202029'/>

      <div id='software-engineering' className={styles.main}>
      <div className={styles.logo}>
      <Link href={"/"}>Prince ING</Link>
      </div>
        <h1 >My skils</h1>
        <div className={styles.container}>
          <div className={styles.left}>

          </div>
          <div className={styles.right}>
            {skils?.map((s,i)=>{
              return(
              <div key={i} id={s?.id} className={styles.skill+ " "+(i%2!=0 ? styles.odd : "")}>
                <div className={styles.box}>
                  <div className={styles.head}>
                    <h3>{s?.title}</h3>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.3386 12.552L9.86263 24.028L7.97729 22.1427L19.452 10.6667H9.33863V8H24.0053V22.6667H21.3386V12.552Z" ></path></svg>
                  </div>
                  <div>
                    <span>{s?.description}</span>
                  </div>
                </div>
                <div className={styles.box}>
                    <Image
                      src={s?.img}
                      width={300}
                      height={350}
                      layout='responsive'
                      className={styles.img}
                      />
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
