import React from 'react'
import styles from './index.module.scss'
import NewHead from '../../../components/header/header'
import Pagination from '../../../components/Pagination'
import Footer from '../../../components/footer/footer'
import { getArticle } from '../../../services/articles'
import Slide from '../../../components/CardView'

export default function index({articles}) {
  return (
    <div className={styles.main}>
      <NewHead/>
      <div className={styles.content}>
        <div className={styles.left}>

          {articles?.map((article,index)=>{
            return(
              <Slide key={index} article={article} style={{width:"calc(100% - 1rem)",margin:".5rem !important",height:"calc(100% - 1rem)"}}/>
            )
          })}
        </div>
        <div className={styles.right}>
          
        </div>
      </div>
      <Pagination ev={articles}/>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API

  const res =  await getArticle({filter:{
    page : context.query.page
  }})

  //console.log(res.length)

  return { 
      props: {
        articles : res || []
      } 
  }
}
