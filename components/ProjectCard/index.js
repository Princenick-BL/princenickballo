import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

export default function ProjectCard() {
  return (
    <div className={styles.card}>
        <Image
            width={400}
            height={400}
            layout="responsive"
            src="/images/my-app.png"
        />
        <div className={styles.banner}>
        </div>
    </div>
  )
}
