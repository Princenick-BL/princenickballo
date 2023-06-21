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
    description : `With extensive experience, I have explored the creation and maintenance of diverse applications, including CRM systems, content publishing platforms, and landing pages. Working from requirements, I design applications that optimize efficiency, follow-up, and cost reduction while meeting customer needs. These experiences have enhanced my ability to develop APIs, responsive web apps, publishing software, and mobile apps. Consequently, I have strengthened my skills in full-stack JavaScript, PHP, and other development frameworks.`,
    img : softIng,
    skils : ["React JS","Next JS","Node JS","Symfony","Wordpress","JavaScript"]
  },
  {
    id: "dev-ops",
    title : "Dev Ops",
    description : "In terms of my dev ops experience, I have specialized in designing and implementing deployment, monitoring, and continuous integration systems for various applications. This involved working with cloud servers, dedicated servers, and cloud hosting, utilizing solutions like Google Cloud, OVH Cloud, and AWS. I have proficiency in monitoring and tracking using tools such as Grafana and Splunk, while also implementing log management systems and alerts for efficient management.One of the most interesting projects was the migration of an infrastructure from one cloud architecture to another, with a cost reduction of over 30%.",
    img : devOps,
    skils : ["Google Cloud","Ovh Cloud","AWS","Docker","Kubernetes","Nginx","Grafana","Splunk"]

  },
  {
    id: "bi-and-big-data",
    title : "BI and Big Data",
    description : "In the field of business intelligence and big data, thanks to the various projects I've worked on, I've had the opportunity to work on data-intensive applications. As an engineer, I've had to set up systems to collect, clean and visualize this data in order to help improve the services provided. ",
    img : biangbigData,
    skils : ["Dashboarding","Looker studio","Big Query"]
  },
  {
    id: "ai-and-machine-learning",
    title : "AI and Machine learning",
    description : "Some of the projects I've worked on have involved AI and machine learning. Particularly content recomendation. I had to extract data, define relevant metrics, clean up and train models on a wide range of datasets. Then, using this trained model, to recomend content. ",
    img : aiAndMl,
    skils : ["Python","R"]
  }
]

export default function Skils() {

  return (
    <>
      <HeadCustom preview={"/images/preview2.png"} theme='#202029'/>

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
                      <pre>{s?.description}</pre>
                      <div className={styles.skils}>
                        {s?.skils?.map((sk,i)=>{
                          return(
                            <div key={i} className={styles.skil}>
                              {sk}
                            </div>
                          )
                        })}
                      </div>
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
