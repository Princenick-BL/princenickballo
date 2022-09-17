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
                paddingLeft: "3rem",
                paddingBottom: "3rem"
                }}>
            <div className={styles.card} >
            <h3 className={styles.title} >Card 1</h3>
            <div className={styles.bar} >
                <div className={styles.emptybar} ></div>
                <div className={styles.filledbar} ></div>
            </div>
            <div className={styles.circle} >
                <svg version="1.1" >
                <circle className={styles.stroke} cx="60" cy="60" r="50"/>
            </svg>
            </div>
            </div>
            <div className={styles.card} >
            <h3 className={styles.title} >Card 2</h3>
            <div className={styles.bar} >
                <div className={styles.emptybar} ></div>
                <div className={styles.filledbar} ></div>
            </div>
            <div className={styles.circle} >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <circle className={styles.stroke} cx="60" cy="60" r="50"/>
            </svg>
            </div>
            </div>
            <div className={styles.card} >
            <h3 className={styles.title} >Card 3</h3>
            <div className={styles.bar} >
                <div className={styles.emptybar} ></div>
                <div className={styles.filledbar} ></div>
            </div>
            <div className={styles.circle} >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <circle className={styles.stroke} cx="60" cy="60" r="50"/>
            </svg>
            </div>
            </div>
            <div className={styles.card} >
            <h3 className={styles.title} >Card 4</h3>
            <div className={styles.bar} >
                <div className={styles.emptybar} ></div>
                <div className={styles.filledbar} ></div>
            </div>
            <div className={styles.circle} >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <circle className={styles.stroke} cx="60" cy="60" r="50"/>
            </svg>
            </div>
            </div>
        </div>
    </div>
  )
}
