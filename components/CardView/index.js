import React from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Slide(){
  return(
    <div
        className={styles.slide} 
        >
            <Link href={"#"}>
                <a>
                    <div className={styles.slider}>
                        <Image
                            src={"https://picsum.photos/500/400"}
                            width="400"
                            height="250"
                            layout="responsive"
                            className={styles.img}
                        />
                        <div className={styles.bonttom}>

                          <div className={styles.mark_down}>
                              {/* <h5 className={styles.cat}>Catérorie</h5> */}
                              <span className={styles.desc}>No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.No comments to show.</span>
                          </div>

                          <div className={styles.publisher}>
                            <Image
                                src={"https://picsum.photos/500/400"}
                                width="40"
                                height="40"
                                layout="fixed"
                                className={styles.publisher_logo}
                                style={{minWidth:"40px"}}
                            />
                            <div className={styles.name}>Published by <strong>Prince Nick Ballo</strong> on Sep,14,2022</div>

                          </div>
                        </div>
                    </div>
                </a>
            </Link>

    </div>
                   
  )
}
