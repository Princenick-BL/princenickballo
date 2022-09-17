import React from 'react'
import styles from './index.module.scss'
import NewHead from '../../../components/header/header'
import Pagination from '../../../components/Pagination'
import Footer from '../../../components/footer/footer'

export default function index() {
  return (
    <div className={styles.main}>
      <NewHead/>
      <div className={styles.content}>

      </div>
      <Pagination/>
      <Footer/>
    </div>
  )
}
