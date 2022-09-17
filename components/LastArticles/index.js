import React from 'react'
import styles from './index.module.scss'

export default function LasrArticle() {
  return (
    <div className={styles.wrapper}>

        <div classNamz={styles.container} style={{
            display:"flex",
            width: "100%",
            height: "max-content",
            overflowY: "hidden",
            paddingTop: "3rem",
            paddingLeft: "1rem",
            paddingBottom: ".5rem"
        }}>
            <div className={styles.mostreadedArticle}>
                <div className={styles.title}>
                    Most readed article
                </div>
            </div>
            <div className={styles.card} >
            
            </div>
            <div className={styles.card} >
            
            </div>
            <div className={styles.card} >
            
            </div>
            <div className={styles.card} >
            
            </div>
        </div>
    </div>
  )
}
